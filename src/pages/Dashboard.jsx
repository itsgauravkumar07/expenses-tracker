import { useEffect, useState } from "react";
import { getExpense, saveExpense } from "../services/localStorage";


function Dashboard(){

    const[expense, setExpense] = useState([]);

    useEffect(() => {
       const allExpense = getExpense();
        setExpense(allExpense);
    }, []);

 
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

        </div>
    )
}

export default Dashboard;