import { useState } from "react";
import { addExpense } from "../services/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PlusIcon} from "@heroicons/react/24/outline";

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

    const notify = () => toast.success("Expense added successfully!!", { autoClose: 3000 });

    addExpense(expense);
    notify();

    setName("");
    setAmount("");
    setCategory("");
    setDate("");
    } 

    return(
        <div className="formContainer">
                <div className="form">
                    <div className="formHeader">
                        <PlusIcon className="formPlusIcon"/>
                        <h1 className="cardHeading">Add new Expense</h1>
                        <p className="cardSubHeading">Keep track of your money by adding expenses</p>
                    </div>

                    <form onSubmit={(e) => handleAdd(e)}>
                        <label className="formLabel">Expense name</label> <br />
                        <input type="text" placeholder="e.g Movies, Fuel" value={name} onChange={(e) => setName(e.target.value)} className="formInput"/> <br />
                        {error.name && <div>{error.name}</div>} <br />

                        <label className="formLabel">Amount</label><br />
                        <input type="number" placeholder="₹ 500" value={amount} onChange={(e) => setAmount(e.target.value)} className="formInput" /> <br />
                        {error.amount && <div>{error.amount}</div>} <br />

                        <label className="formLabel">Category</label><br />
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="formInput">
                            
                            <option value="">Category</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="bill">Bill</option>

                        </select> <br />
                        {error.category && <div>{error.category}</div>} <br />
                        
                        <label className="formLabel">Date</label><br />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="formInput" /> <br />
                        {error.date && <div>{error.date}</div>} <br />

                        <button type="submit" className="primaryBtn">Add Expense</button>
                    </form>
                    <button className="secondaryBtn">Cancel</button>
                    <ToastContainer position="top-right" />
                </div>
        </div>
    )
}

export default AddExpense;