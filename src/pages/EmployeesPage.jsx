import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import { Button, TextInput } from "@mantine/core";

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
    <>
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
        style={{ marginBottom: "16px" }}
      />
      {filteredEmployees.length > 0 ? (
        filteredEmployees.map((employee) => (
          <Link key={employee.id} to={`/employees/${employee.id}`}>
            <h1>Name: {employee.name}</h1>
          </Link>
        ))
      ) : (
        <h1>No employees found</h1>
      )}
    </>
  );
};

export default EmployeesPage;
