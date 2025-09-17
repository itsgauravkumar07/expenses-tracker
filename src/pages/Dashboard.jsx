import { useEffect, useState } from "react";
import { getExpense, saveExpense } from "../services/localStorage";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


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

            <div>
                <h1>Total expense</h1>
                <p>{total}</p>
            </div>

            <div>
                <h1>Active categories</h1>
                <p>{active}</p>
            </div>

            <div>
                <h1>Average per day spend</h1>
                <p>{averagePerDay.toFixed(2)}</p>
            </div>


            <h1>All expnese</h1>

            <div>
                
               <select onChange={(e) => setCatFiltered(e.target.value)}>
                <option value="all">All</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="bill">Bills</option>
               </select>
            </div>

            <div>
               {catFilteredList.length > 0 ? catFilteredList.map((ex) => (
                   
                        <li key={ex.id}> 
                        {ex.name} - {ex.amount} - {ex.date} - {ex.category} 
                        <button onClick = {() => {handleDelete(ex.id)}} >Delete</button>
                    </li>
                     
                )) : 
                    <p>No expenese found</p>
                }
                
                
               
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