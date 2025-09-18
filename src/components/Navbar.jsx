import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar(){

    const[onMenu, setOnMenu] = useState(false);

    const links = [
        {name: "Dashboard", to: "/" },
        {name: "Add Expense", to: "/add" },
        {name: "Setting", to: "/setting" }
    ]

    return (
        <nav className="flex justify-between items-center h-20 pt-10 pb-5 px-6 relative shadow-lg bg-gray-100">
            <div>
                <img src={logo} alt="" className="h-10"/>
            </div>

            {/* desktop links */}
            <div className="hidden md:flex justify-end gap-14">
               
                 {links.map((link => (
                    <NavLink 
                        key={link.to}
                        to={link.to}
                        className={({isActive}) => `px-3 py-2 text-lg font-medium hover:text-blue-500 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                        }`}
                    >
                        {link.name}
                    </NavLink>

                 )))}
               
            </div>

            <div className="md:hidden">
                <button  onClick={() => setOnMenu(!onMenu)}>☰</button>
            </div>

            {
                onMenu && (
                    <div className="md:hidden absolute top-15 right-4 flex flex-col bg-gray-100 px-3 py-2 gap-3 rounded-md shadow-sm">
                        {links.map((link => (
                            <NavLink 
                                key={link.to}
                                to={link.to}
                                className={({isActive}) => `px-3 py-2 text-lg font-medium hover:text-blue-500 ${
                                isActive ? "text-blue-500" : "text-gray-800"
                                }`}
                                onClick={() => setOnMenu(false)}
                            >
                                {link.name}
                            </NavLink>
                        )))}
                        
                    </div>
                )
            }
           
        </nav>
    )
}

export default Navbar;