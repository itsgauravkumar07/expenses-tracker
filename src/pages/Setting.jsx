import { deleteAllExpense } from "../services/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cog6ToothIcon, ExclamationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

function Setting(){

    const notify = () => toast.error("All Expenses is deleted", { autoClose: 2000 });

    const handleDelete = () => {
        deleteAllExpense();
        notify();
    }
    return(
        <div className="mx-6 my-15 flex flex-col items-center justify-center">
           <div className="iconHeader">
                <Cog6ToothIcon className="icon"/>
                <h1 className="heading">Setting</h1>
                <p className="subHeading">Customize your expense tracking experience</p>
            </div>

            <div className="settingCard">
                <div className="SettingCardHeading">
                    <ExclamationCircleIcon className="cardIcon text-black"/>
                    <h1 className="cardHeading text-black font-semibold">About</h1>
                </div>

                <div className="settingCardBody">
                    <h1 className="cardHeading">TrackWise</h1>
                    <p className="cardHeading font-normal pt-4">Trackwise is a simple expense tracker that helps you manage daily spending, track categories, and stay on top of your finances. Keep track of where your money goes and make informed financial decisions.</p>
                </div>
            </div>

            <div className="settingCard">
                <div className="SettingCardHeading">
                    <TrashIcon className="cardIcon text-red-500"/>
                    <h1 className="cardHeading text-red-500 font-semibold">Data Management</h1>
                </div>

                <div className="settingCardBody">
                    <h1 className="cardHeading">Danger Zone</h1>
                    <p className="cardHeading font-normal pt-4">This action will permanently delete all your expense data. This cannot be undone.</p>
                </div>

                <button onClick={handleDelete} className="dangerBtn">Clear All Expenses</button>
            </div>

            <ToastContainer position = "top-right" />
        </div>
    )
}

export default Setting;