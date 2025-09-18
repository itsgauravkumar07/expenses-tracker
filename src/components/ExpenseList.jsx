
export const ExpenseList = ({ expenses, onDelete }) => {
   
    if(expenses.length === 0){
        return <p className="noExpense">No expenese found</p>;
    }

    return (
        <div className="expenseList">
            <div className="expnseLabel">
                <label>Expense</label>
                <label>Date</label>
                <label>Category</label>
                <label>Amount</label>
                <label className="text-right">Delete</label>
            </div>

           { expenses.map((ex) => (
                   
                <div key={ex.id} 
                 className="expense"> 
                    <span>{ex.name}</span> 
                    <span>{ex.date}</span> 
                    <span>{ex.category}</span>
                    <span>{"₹" + ex.amount}</span>  
                    <button onClick={() => {onDelete(ex.id)}} className="expenseDelete">Delete</button>
                </div>

            ))}
        </div>
    )
}