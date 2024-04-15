import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import "./pages-style/employeepage.css";

const API_URL = "http://localhost:4000";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const getEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/employees`);
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleToggleForm = () => {
    setShowAddForm(!showAddForm);
  };
  return (
    <div className="employeepage">
      <h1>All employees</h1>

      <button onClick={handleToggleForm}>
        {showAddForm ? "Cancel Add Employee" : "Add New Employee"}
      </button>
      {showAddForm && <EmployeeForm />}
      {employees.length > 0 ? (
        <ul className="employee-list">
          {employees.map((employee) => (
            <li key={employee.id} className="employee-preview">
              <Link to={`/employees/${employee.id}`}>
                <img src={employee.avatar} />
                <div className="employee-info">
                  <h2>{employee.name}</h2>
                  <p>{employee.position}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>No employees</h1>
      )}
    </div>
  );
};

export default EmployeesPage;
