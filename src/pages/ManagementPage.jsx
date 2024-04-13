import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:4000";

const ManagementPage = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const initialStatus = "Active";

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
            <h3>Status: {employee.status}</h3>
      <button onClick={() => handleUpdateEmployeeStatus("Terminated")}>Terminate</button>
      <button onClick={() => handleUpdateEmployeeStatus("Active")}>Reactivate</button>
      {/* Other management page content */}
      </li>
        </ul>
      </div>
      <Link to="/">
        <button type="button">Home Page</button>
      </Link>
      {/* Adicionar Gestão de Salário. EX: Mostrar o salário actual, Editar saláiro (Pomovido) etc easy to implement*/}
    </>
  );
};

export default ManagementPage;
