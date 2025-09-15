import { useEffect, useState } from "react";
import { getExpense, saveExpense } from "../services/localStorage";


function Dashboard(){

    const[expense, setExpense] = useState([]);
    const[categoryTotals, setCategoryTotals] = useState({});

    useEffect(() => {
       const allExpense = getExpense();
        setExpense(allExpense);
    }, []);

    useEffect(() => {
        const total = {};
        expense.map((ex) => {
            
            if(!total[ex.category]){
                total[ex.category] = 0;
            }

            total[ex.category] += Number(ex.amount);
        })

        setCategoryTotals(total);

    }, [expense]);

    const handleDelete = (id) => {
        const existing = getExpense();
        const newList = existing.filter(i => i.id !== id);

        saveExpense(newList);
        setExpense(newList);
    }

    return(
        <div>
            <h1>All expnese</h1>

            <div>
                
                {expense.map((ex) => (
                     <li key={ex.id}>
                        {ex.name} - {ex.amount} - {ex.date} - {ex.category} 
                        <button onClick = {() => {handleDelete(ex.id)}} >Delete</button>
                    </li>
                ))}
            
            </div>

            <h2>Expense Summary</h2>
             <div>
                {
                   Object.entries(categoryTotals).map(([category, total], index) => (
                    <li key={index}>{category} - {total}</li>
                   ))
                }
            </div>

        </div>
    )
}

export default Dashboard;