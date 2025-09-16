import { deleteAllExpense } from "../services/localStorage";


function Setting(){

    

    const handleDelete = () => {
        deleteAllExpense();
       
    }
    return(
        <div>
            <p>Clear all data</p>
            <button onClick={handleDelete}>Clear all</button>
            
        </div>
    )
}

export default Setting;