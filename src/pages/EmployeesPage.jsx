import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:4000";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/employees`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmployees(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1>All employees</h1>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <Link key={employee.id} to={`/employees/${employee.id}`}>
            <h1>Name: {employee.name.first}</h1>
          </Link>
        ))
      ) : (
        <h1>No employees</h1>
      )}
    </>
  );
};

export default EmployeesPage;
