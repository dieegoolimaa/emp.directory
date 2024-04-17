import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import { Button, TextInput } from "@mantine/core";
import "./pages-style/employeepage.css";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getEmployees = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/employees`);
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="employees-page">
      {showAddForm ? <h1>Register new employee</h1> : <h1>All employees</h1>}
      <Button
        onClick={handleToggleForm}
        style={({ width: "500px" }, { alignContent: "center" })}
      >
        {showAddForm ? "Cancel" : "Add New Employee"}
      </Button>
      {showAddForm && <EmployeeForm />}
      {/* Conditionally render search bar based on showAddForm state */}
      {!showAddForm && (
        <TextInput
          label="Search by name"
          placeholder="Enter name"
          value={searchQuery}
          onChange={handleSearch}
          style={({ width: "200px" }, { marginTop: "20px" })}
        />
      )}
      {!showAddForm &&
        (filteredEmployees.length > 0 ? (
          <ul>
            {filteredEmployees.map((employee) => (
              <Link to={`/employees/${employee.id}`}>
                <li key={employee.id}>
                  <div className="employee-card">
                    <img src={employee.picture} alt={employee.name} />

                    <div className="employee-name-position">
                      <h3>{employee.name}</h3>
                      <p>{employee.position}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <h1>No employees found</h1>
        ))}
    </div>
  );
};

export default EmployeesPage;
