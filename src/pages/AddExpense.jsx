import { useState } from "react";

function AddExpense(){

    const[expense, setExpense] = useState([]);
    const[name, setName] = useState("");
    const[amount, setAmount] = useState(0);
    const[date, setDate] = useState(null);
    const[category, setCategory] = useState("");

    return(
        <div>
            <form>
                <label>Expense name</label>
                <input type="text" placeholder="e.g Movies, Fuel" value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Amount</label>
                <input type="number" placeholder="₹ 500" value={amount} onChange={(e) => setAmount(e.target.value)}/>

                <label>Category</label>
                <input type="text" placeholder="e.g food, shopping" value={category} onChange={(e) => setCategory(e.target.value)}/>
                
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>

                <button onSubmit={handleAdd()}>Add Expense</button>
            </form>

        </div>
    )
}

export default AddExpense;