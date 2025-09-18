import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";
import { ExpenseList } from "../components/ExpenseList";
import { CategorySummary } from "../components/CategorySummary";
import { ExpenseChart } from "../components/ExpenseChart";
import { getExpense, saveExpense } from "../services/localStorage";
import {ChartBarIcon, ChartPieIcon} from "@heroicons/react/24/outline";


function Dashboard(){

    const[expense, setExpense] = useState([]);
    const[categoryAmount, setCategoryAmount] = useState({});
    const[total, setTotal] = useState(0);
    const[catFiltered, setCatFiltered] = useState("all");

    // When First Time screen load then take all the data store in localStroge and set it on expense state
    useEffect(() => {
       const allExpense = getExpense();
        setExpense(allExpense);
    }, []);


    //It run every time when the expense changes it check and sum all the categories wise amount and also sum the total amount of all expenses
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

    

    //This function helps to delete an expense from the list
    const handleDelete = (id) => {
        const existing = getExpense();
        const newList = existing.filter(i => i.id !== id);

        saveExpense(newList);
        setExpense(newList);
    }

    //This can simply give the active categories lenght
    const active = Object.keys(categoryAmount).length;


    //This can give the average per day spend amount
    const averagePerDay = total/30;


    //This can help the filter out the expenses by their category
   const catFilteredList = expense.filter((ex) => {
    if (catFiltered === "all") return true;
    return ex.category === catFiltered;
   });

    const chartData = Object.entries(categoryAmount).map(([category, total]) => ({
    name: category,
    value: total
   }));


    return(
        <div className="mx-6">


            {/* Expense summary cards */}
            <div className="cardContainer">
                <Card title="Total expense" des="Expense of this month" value={"₹" + total} icon={<ChartBarIcon  />} />
                <Card title="Categories" des="Active spending categories" value={active} icon={<ChartPieIcon  />} />
                <Card title="Average per day spend" des="Based on 30-day period" value={"₹" + averagePerDay.toFixed(2)} icon={"$"} />
            </div>
           


           {/* Expenese List */}
           <div className="expenseCard">
                <div className="cardInner">
                    <h1 className="cardHeading">All expnese</h1>
                    <Filter value={catFiltered} onChange={setCatFiltered} />
                </div>

                <div>
                    <ExpenseList expenses={catFilteredList} onDelete={handleDelete}/>     
                </div>
           </div>
           


            <div className="categorySummaryCard">
                {/* Expense summay component by category wise*/}
                <div className="categorySummaryCardText">
                    <h2 className="cardHeading">Expense Summary</h2> 
                    <CategorySummary categoryAmount={categoryAmount} />
                </div>

                {/* Expense summary chart */}
                <div className="categorySummaryChart">
                    <h2 className="cardHeading">Category Distribution</h2>
                    <ExpenseChart data={chartData}/> 
                </div>
            </div>
           

        </div>
    )
}

export default Dashboard;