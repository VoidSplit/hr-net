import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import CreateEmployee from "../pages/CreateEmployee";
import EmployeeList from "../pages/EmployeeList";

export default function RouteManager() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={ <CreateEmployee/> }/>
            <Route exact path="/employee-list" element={ <EmployeeList/> }/>
            <Route path='*' element={ <CreateEmployee /> }/>
          </Routes>
      </div>
    </Router>
  );
};