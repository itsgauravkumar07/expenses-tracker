import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";
import { ExpenseList } from "../components/ExpenseList";
import { CategorySummary } from "../components/CategorySummary";
import { ExpenseChart } from "../components/ExpenseChart";
import { getExpense, saveExpense } from "../services/localStorage";
import {ChartBarIcon, ChartPieIcon} from "@heroicons/react/24/outline";


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
        <div className="mx-6">

            <div className="cardContainer">
                <Card title="Total expense" des="Expense of this month" value={"₹" + total} icon={<ChartBarIcon  />} />
                <Card title="Categories" des="Active spending categories" value={active} icon={<ChartPieIcon  />} />
                <Card title="Average per day spend" des="Based on 30-day period" value={"₹" + averagePerDay.toFixed(2)} icon={"$"} />
            </div>
           
           <div className="expenseCard">
                <div className="cardInner">
                    <h1 className="cardHeading">All expnese</h1>
                    <Filter value={catFiltered} onChange={setCatFiltered} />
                </div>

                <div>
                    <ExpenseList expenses={catFilteredList} onDelete={handleDelete}/>     
                </div>
           </div>
           

           
            <div>
                 <h2>Expense Summary</h2> 
                <CategorySummary categoryAmount={categoryAmount} />
            </div>

            <div>
                 <h2>Expense Summary Chart</h2>
                 <ExpenseChart data={chartData}/> 
            </div>

        </div>
    )
}

export default Dashboard;