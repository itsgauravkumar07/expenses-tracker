
//This is show the all stored expense
export const getExpense = () =>{
    const result = localStorage.getItem("expense");
    if(!result) return [];
    return JSON.parse(result);
}

//It can save the all expense to the localstorage
export const saveExpense = (newExpense) => {
    localStorage.setItem("expense", JSON.stringify(newExpense));
}


//It can helps to add the expense 
export const addExpense = (expense) => {
    let existing = getExpense();
    const updated = [...existing, expense];
    saveExpense(updated);
}

//It can helps to delete the all expense form localstorage
export const deleteAllExpense = () => {
    localStorage.clear();
}

