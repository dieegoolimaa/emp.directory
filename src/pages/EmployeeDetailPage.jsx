import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mantine/core";
import "./pages-style/empdetailpage.css";
import { SlHome } from "react-icons/sl";
import { TiArrowBackOutline } from "react-icons/ti";

const EmployeeDetailPage = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  const getEmployee = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/employees/${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmployee({ ...data });
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
        <img src={employee.picture} />
        <h3>
          <b style={{ marginRight: "5px" }}>Status:</b> {employee.status}
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
                <b style={{ marginRight: "5px" }}>ID: </b> {employee.id}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Name: </b> {employee.name}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Gender: </b> {employee.gender}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Email: </b> {employee.email}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Phone: </b> {employee.phone}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>City: </b>{" "}
                {employee.location?.city}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Country: </b>{" "}
                {employee.location?.country}
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
                <b style={{ marginRight: "5px" }}>Position: </b>{" "}
                {employee.position}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Department: </b>{" "}
                {employee.department}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Salary: </b> {employee.income}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Start Date: </b>{" "}
                {employee.hiringDate}
              </h3>
            </li>
            <li>
              <h3>
                <b style={{ marginRight: "5px" }}>Modality: </b>{" "}
                {employee.modality}
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
          <Button type="button">
            <SlHome />
          </Button>
        </Link>
        <Link to="/employees">
          <Button type="button">
            <TiArrowBackOutline />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
