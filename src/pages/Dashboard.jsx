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
                
                {expense.map((expen) => (
                     <li key={expen.id}>
                        {expen.name} - {expen.amount} - {expen.date} - {expen.category}
                    </li>
                ))}
            
            </div>
        </div>
    )
}

export default Dashboard;