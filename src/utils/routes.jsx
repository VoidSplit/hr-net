import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";

export default function RouteManager() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/employee-list" element={ <EmployeeList/> }/>
            <Route path='*' element={ <Home /> }/>
          </Routes>
      </div>
    </Router>
  );
};