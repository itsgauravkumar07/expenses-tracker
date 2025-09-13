import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Setting from './pages/Setting';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />

         
      </BrowserRouter>
    </>
  )
}

export default App
