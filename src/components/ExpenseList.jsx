
export const ExpenseList = ({ expenses, onDelete }) => {
   
    if(expenses.length === 0){
        return <p>No expenese found</p>;
    }

    return (
        <div>
           { expenses.map((ex) => (
                   
                <li key={ex.id}> 
                    {ex.name} - {ex.amount} - {ex.date} - {ex.category} 
                    <button onClick = {() => {onDelete(ex.id)}} >Delete</button>
                </li>

            ))}
        </div>
    )
}