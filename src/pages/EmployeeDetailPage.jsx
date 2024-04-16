import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mantine/core";
const API_URL = "http://localhost:4000";
import "./pages-style/empdetailpage.css";

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
      <div className="container-employee">
        <div className="title">
          <h1 className="h1">Check all the details about {employee.name}</h1>
        </div>
        <img src={employee.picture} alt={employee.name} />
        <h3>
          <b>Status:</b> {employee.status}
        </h3>
      </div>
      <div className="container-informations">
        <div className="personal-info">
          <div className="title-empdetailpage">
            <h2>Personal Information</h2>
          </div>
          <ul>
            <li>
              <h3>
                <b>ID:</b> {employee.id}
              </h3>
            </li>
            <li>
              <h3>
                <b>Name:</b> {employee.name}
              </h3>
            </li>
            <li>
              <h3>
                <b>Gender:</b> {employee.gender}
              </h3>
            </li>
            <li>
              <h3>
                <b>Email:</b> {employee.email}
              </h3>
            </li>
            <li>
              <h3>
                <b>Phone:</b> {employee.phone}
              </h3>
            </li>
            <li>
              <h3>
                <b>City:</b> {employee.location?.city}
              </h3>{" "}
            </li>
            <li>
              <h3>
                <b>Country:</b> {employee.location?.country}
              </h3>
            </li>
          </ul>
        </div>
        <div className="professional-info">
          <div className="title-empdetailpage">
            <h2>Professional Information</h2>
          </div>
          <ul>
            <li>
              <h3>
                <b>Position:</b> {employee.position}
              </h3>
            </li>
            <li>
              <h3>
                <b>Department:</b> {employee.department}
              </h3>
            </li>
            <li>
              <h3>
                <b>Salary:</b> {employee.income}
              </h3>
            </li>
            <li>
              <h3>
                <b>Start Date:</b> {employee.hiringDate}
              </h3>
            </li>
            <li>
              <h3>
                <b>Modality:</b> {employee.modality}
              </h3>
            </li>
          </ul>
          <div className="manage-btn">
            <Link to={`/employees/${employeeId}/management`}>
              <Button type="button">Manage Employee</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/">
          <Button type="button">Home Page</Button>
        </Link>
        <Link to="/employees">
          <Button type="button">Employees Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
