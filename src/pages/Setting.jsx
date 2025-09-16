import { deleteAllExpense } from "../services/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Setting(){

    const notify = () => toast.error("All Expenses is deleted", { autoClose: 2000 });

    const handleDelete = () => {
        deleteAllExpense();
        notify();
    }
    return(
        <div>
            <p>Clear all data</p>
            <button onClick={handleDelete}>Clear all</button>
            <ToastContainer position = "top-right" />
        </div>
    )
}

export default Setting;