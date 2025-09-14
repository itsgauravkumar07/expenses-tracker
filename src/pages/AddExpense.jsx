import { useState } from "react";
import { addExpense } from "../services/localStorage";

function AddExpense(){

    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    const[date, setDate] = useState("");
    const[category, setCategory] = useState("");

    const[error, setError] = useState({
        name: "",
        amount: "",
        date: "",
        category: ""
    });

    const numbericAmount = Number(amount);

    const handleAdd = (e) => {

        e.preventDefault();

        if(name === ''){
           setError(oldarr => ({...oldarr, name: "Name can't be empty"}));
            return;
        }

        if(numbericAmount <= 0 || isNaN(numbericAmount)){
           setError(oldarr => ({...oldarr, amount: "Enter valid amount"}));
            return;
        }

        if(date === ''){
          setError(oldarr => ({...oldarr, date: "Enter valid Date"}));
           return;
        }

        if(category === ''){
          setError(oldarr => ({...oldarr, category: "Enter valid Category"}));
          return;
        }

        const expense = {
        id: Date.now(),
        name: name,
        amount: numbericAmount,
        date: date,
        category: category
    };

    addExpense(expense);
    alert("Expense added successfully");
    } 

    return(
        <div>
            <form onSubmit={(e) => handleAdd(e)}>
                <label>Expense name</label> <br />
                <input type="text" placeholder="e.g Movies, Fuel" value={name} onChange={(e) => setName(e.target.value)}/> <br />
                {error.name && <div>{error.name}</div>} <br />

                <label>Amount</label><br />
                <input type="number" placeholder="₹ 500" value={amount} onChange={(e) => setAmount(e.target.value)}/> <br />
                {error.amount && <div>{error.amount}</div>} <br />

                <label>Category</label><br />
                <input type="text" placeholder="e.g food, shopping" value={category} onChange={(e) => setCategory(e.target.value)}/> <br />
                {error.category && <div>{error.category}</div>} <br />
                
                <label>Date</label><br />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/> <br />
                {error.date && <div>{error.date}</div>} <br />

                <button type="submit">Add Expense</button>
            </form>

        </div>
    )
}

export default AddExpense;