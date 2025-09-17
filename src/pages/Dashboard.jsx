import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";
import { ExpenseList } from "../components/ExpenseList";
import { getExpense, saveExpense } from "../services/localStorage";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {ChartBarIcon, ChartPieIcon} from "@heroicons/react/24/outline";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];


function Dashboard(){

    const[expense, setExpense] = useState([]);
    const[categoryAmount, setCategoryAmount] = useState({});
    const[total, setTotal] = useState(0);
    const[catFiltered, setCatFiltered] = useState("all");

    useEffect(() => {
       const allExpense = getExpense();
        setExpense(allExpense);
    }, []);

    useEffect(() => {
        const catAmount = {};
        let amountTotal = 0;

        expense.map((ex) => {
            
            if(!catAmount[ex.category]){
                catAmount[ex.category] = 0;
            }

            catAmount[ex.category] += Number(ex.amount);
            amountTotal += Number(ex.amount);
           
        })

        setCategoryAmount(catAmount);
        setTotal(amountTotal);

    }, [expense]);

    const handleDelete = (id) => {
        const existing = getExpense();
        const newList = existing.filter(i => i.id !== id);

        saveExpense(newList);
        setExpense(newList);
    }

    const active = Object.keys(categoryAmount).length;
    const averagePerDay = total/30;

   const catFilteredList = expense.filter((ex) => {
    if (catFiltered === "all") return true;
    return ex.category === catFiltered;
   });

    const chartData = Object.entries(categoryAmount).map(([category, total]) => ({
    name: category,
    value: total
   }));


    return(
        <div>

            <Card title="Total expense" des="This total money spend this month" value={total} icon={<ChartBarIcon className="cardIcon" />} />
            <Card title="Active categorues" des="Active spending categories" value={active} icon={<ChartPieIcon className="cardIcon" />} />
            <Card title="Average per day spend" des="Based on 30-day period" value={averagePerDay.toFixed(2)} icon={"$"} />

            <div>
                <h1>All expnese</h1>
                <Filter value={catFiltered} onChange={setCatFiltered} />
            </div>

            <div>
             <ExpenseList expenses={catFilteredList} onDelete={handleDelete}/>     
            </div>

            <h2>Expense Summary</h2>            
            
             <div>
                {
                   Object.entries(categoryAmount).map(([category, total], index) => (
                    <li key={index}>{category} - {total}</li>
                   ))
                }
            </div>

            <div>
                 <h2>Expense Summary Chart</h2>
                    <PieChart width={400} height={300}>
                        <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                        >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
            </div>

        </div>
    )
}

export default Dashboard;