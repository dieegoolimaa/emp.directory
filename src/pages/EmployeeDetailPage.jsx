import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./pages-style/empdetailpage.css";

const API_URL = "http://localhost:4000";

const EmployeeDetailPage = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});
  const initialStatus = "Active";

  const getEmployee = async () => {
    try {
      const response = await fetch(`${API_URL}/employees/${employeeId}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmployee({ ...data, status: initialStatus });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployee();
  }, [employeeId]);

  return (
    <div className="empdetailpage">
      <h1>Employee Detail Page</h1>

      <div className="info-boxes">
        <div className="personal-info">
          <h2>Personal Information</h2>
          <ul>
            <li>
              <h3>ID: {employee.id}</h3>
            </li>
            <li>
              <h3>Name: {employee.name}</h3>
            </li>
            <li>
              <h3>Gender: {employee.gender}</h3>
            </li>
            <li>
              <h3>Email: {employee.email}</h3>
            </li>
            <li>
              <h3>Phone: {employee.phone}</h3>
            </li>
            <li>
              <h3>City: {employee.location?.city}</h3>
            </li>
            <li>
              <h3>Country: {employee.location?.country}</h3>
            </li>
          </ul>
        </div>
        <div className="professional-info">
          <h2>Professional Experience</h2>
          {/* Add content based on your API response for experience */}
          <Link to={`/employees/${employeeId}/management`}>
            <button type="button">Manage Employee</button>
          </Link>
        </div>
      </div>

      <div className="other-buttons">
        <Link to="/">
          <button type="button">Home Page</button>
        </Link>
        <Link to="/employees">
          <button type="button">Employees Page</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
