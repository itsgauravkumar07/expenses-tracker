import { useEffect, useState } from "react";
import { getExpense, saveExpense } from "../services/localStorage";


function Dashboard(){

    const[expense, setExpense] = useState([]);
    const[categoryAmount, setCategoryAmount] = useState({});
    const[total, setTotal] = useState(0);

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

   
    return(
        <div>

            <div>
                <h1>Total expense</h1>
                <p>{total}</p>
            </div>

           


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
                   Object.entries(categoryAmount).map(([category, total], index) => (
                    <li key={index}>{category} - {total}</li>
                   ))
                }
            </div>

        </div>
    )
}

export default Dashboard;