import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const API_URL = "http://localhost:4000";

const ManagementPage = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const [newSalary, setNewSalary] = useState("");
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const navigate = useNavigate();
  const initialStatus = "Active";

  //Get Data from API
  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await fetch(`${API_URL}/employees/${employeeId}`);
        if (response.ok) {
          const data = await response.json();
          setEmployee({ ...data, status: initialStatus });
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    getEmployee();
  }, [employeeId]);

  //Change status of acctive / not active om employee
  const handleUpdateEmployeeStatus = async (newStatus) => {
    try {
      const updatedEmployee = { ...employee, status: newStatus };
      const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });
      if (response.ok) {
        setEmployee(updatedEmployee);
        alert(`Employee status updated to ${newStatus}.`);
      } else {
        console.error("Failed to update employee status.");
      }
    } catch (error) {
      console.error("Error updating employee status:", error);
    }
  };

  // Updating salary
  const handleUpdateSalary = async () => {
    try {
      const updatedEmployee = { ...employee, income: newSalary };
      const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });
      if (response.ok) {
        setEmployee(updatedEmployee);
        // alert("Salary updated successfully.");
        setShowSalaryForm(false); // Hide the salary form after successful update
      } else {
        console.error("Failed to update salary.");
      }
    } catch (error) {
      console.error("Error updating salary:", error);
    }
  };

  //Deleting an Employee from the backend
  const handleDeleteEmployee = async () => {
    try {
      const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Employee deleted successfully.");
        // Redirect to a different page
        navigate("/employees");
      } else {
        console.error("Failed to delete employee.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <>
      <h1>Management Page</h1>
      <p>Current Selected User's Name: {employee.name}</p>
      <div>
        <h1>Professional Information</h1>
        <ul>
          <li>
            <h3>Hiring Date: {employee.hiringDate}</h3>
          </li>
          <li>
            <h3>Modality: {employee.modality}</h3>
          </li>
          <li>
            <h3>Department: {employee.department}</h3>
          </li>
          <li>
            <h3>Position: {employee.position}</h3>
          </li>
          <li>
            <h3>Current Income: {employee.income} €</h3>
          </li>
          {showSalaryForm ? (
            <div>
              <input
                type="number"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value.replace(" €", ""))}
                placeholder="Enter new salary"
              />
              <Button onClick={handleUpdateSalary}>Update Salary</Button>
            </div>
          ) : (
            <Button onClick={() => setShowSalaryForm(true)}>
              Update Salary
            </Button>
          )}
          <li>
            <h3>Status: {employee.status}</h3>
            <Button onClick={() => handleUpdateEmployeeStatus("Terminated")}>
              Terminate
            </Button>
            <Button onClick={() => handleUpdateEmployeeStatus("Active")}>
              Reactivate
            </Button>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button onClick={handleDeleteEmployee}>Delete Employee</Button>
        <Link to="/employees">
          <Button type="button">Employees Page</Button>
        </Link>
        <Link to="/">
          <Button type="button">Home Page</Button>
        </Link>
      </div>
    </>
  );
};
export default ManagementPage;
