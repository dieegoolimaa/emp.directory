import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import { Button, TextInput } from "@mantine/core";
import "./pages-style/employeepage.css";

const API_URL = "http://localhost:4000";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="employees-page">
      <h1>All employees</h1>
      <Button onClick={handleToggleForm} style={{ width: "100%" }}>
        {showAddForm ? "Cancel" : "Add New Employee"}
      </Button>
      {showAddForm && <EmployeeForm />}
      <TextInput
        label="Search by name"
        placeholder="Enter name"
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredEmployees.length > 0 ? (
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
      )}
    </div>
  );
};

export default EmployeesPage;
