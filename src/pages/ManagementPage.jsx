import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Switch } from "@mantine/core";
import { Notification, rem } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import { SlHome } from "react-icons/sl";
import { TiArrowBackOutline } from "react-icons/ti";

import "./pages-style/managementpage.css";

const API_URL = "http://localhost:4000";

const ManagementPage = () => {
  //notification message and icon when switching between active and terminated status
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  // State Variables
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const [newSalary, setNewSalary] = useState("");
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const initialStatus = "Active";

  //Get Data from API
  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await fetch(`${API_URL}/employees/${employeeId}`);
        if (response.ok) {
          const data = await response.json();
          setEmployee({ ...data });
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
        // Show notification
        setNotification(
          newStatus === "Active"
            ? "Employee status changed to Active"
            : "Employee status changed to Terminated"
        );
        // Hide notification after 3 seconds
        setTimeout(() => setNotification(null), 3000);
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
    <div className="management-page">
      <h1>Management Page</h1>
      <img src={employee.picture} />
      <p>
        Current Selected User's Name: <b>{employee.name}</b>
      </p>
      <div className="main-container">
        <div>
          <div className="title-management">
            <h2>Professional Information</h2>
          </div>
          <ul>
            <li>
              <h3>
                <b>Hiring Date: </b>
                {employee.hiringDate}
              </h3>
            </li>
            <li>
              <h3>
                <b>Modality: </b>
                {employee.modality}
              </h3>
            </li>
            <li>
              <h3>
                <b>Department: </b>
                {employee.department}
              </h3>
            </li>
            <li>
              <h3>
                <b>Position:</b> {employee.position}
              </h3>
            </li>
            <li>
              <h3>
                <b>Current Income:</b> {employee.income} €
              </h3>
            </li>
            {showSalaryForm ? (
              <div>
                <input
                  type="number"
                  value={newSalary}
                  onChange={(e) =>
                    setNewSalary(e.target.value.replace(" €", ""))
                  }
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
              <h3>
                <b>Status:</b> {employee.status}
              </h3>
              <Switch
                checked={employee.status === "Active"}
                size="lg"
                onChange={(event) =>
                  handleUpdateEmployeeStatus(
                    event.currentTarget.checked ? "Active" : "Terminated"
                  )
                }
              />

              {notification && (
                <Notification
                  color={employee.status === "Active" ? "teal" : "red"}
                  title="Employee status updated!"
                  mt="md"
                >
                  {notification}
                </Notification>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="button-container">
        <Button onClick={handleDeleteEmployee}>Delete Employee</Button>
        <Link to={`/employees/${employeeId}`}>
          <Button type="button">
            <TiArrowBackOutline />
          </Button>
        </Link>
        <Link to="/">
          <Button type="button">
            <SlHome />
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ManagementPage;
