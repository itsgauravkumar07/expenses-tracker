import { useEffect, useState } from "react";
import { getExpense } from "../services/localStorage";


function Dashboard(){

    const[expense, setExpense] = useState([]);

    useEffect(() => {
       const allExpense = getExpense();
       console.log("Fetched expense: ", allExpense);
        setExpense(allExpense);
    }, []);

 


    return(
        <div>
            <h1>All expnese</h1>

            <div>
                
                {expense.map((ex) => (
                     <li key={ex.id}>
                        {ex.name} - {ex.amount} - {ex.date} - {ex.category}
                    </li>
                ))}
            
            </div>
        </div>
    )
}

export default Dashboard;