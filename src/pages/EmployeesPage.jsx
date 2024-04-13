import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";

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
    <>
      <h1>All employees</h1>
      
      <button onClick={handleToggleForm}>
        {showAddForm ? "Cancel Add Employee" : "Add New Employee"}
      </button>
      {showAddForm && <EmployeeForm />}
      {employees.length > 0 ? (
        employees.map((employee) => (
          <Link key={employee.id} to={`/employees/${employee.id}`}>
            <h1>Name: {employee.name}</h1>
          </Link>
        ))
      ) : (
        <h1>No employees</h1>
      )}
    </>
  );
};

export default EmployeesPage;
