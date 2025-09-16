

export const getExpense = () =>{
    const result = localStorage.getItem("expense");
    if(!result) return [];
    return JSON.parse(result);
}

export const saveExpense = (newExpense) => {
    localStorage.setItem("expense", JSON.stringify(newExpense));
}

export const addExpense = (expense) => {
    let existing = getExpense();
    const updated = [...existing, expense];
    saveExpense(updated);
}

export const deleteAllExpense = () => {
    localStorage.clear();
}

