import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Select, useMantineTheme } from "@mantine/core";
import "./component-style/employee-form.css";

const EmployeeForm = ({ employee, isUpdate = false }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  
  // set states
  const [name, setName] = useState(isUpdate ? employee.name : "");
  const [status, setStatus] = useState(isUpdate ? employee.status : "Active");
  const [gender, setGender] = useState(isUpdate ? employee.gender : "");
  const [phone, setPhone] = useState(isUpdate ? employee.phone : "");
  const [email, setEmail] = useState(isUpdate ? employee.email : "");
  const [city, setCity] = useState(isUpdate ? employee.location.city : "");
  const [country, setCountry] = useState(
    isUpdate ? employee.location.country : ""
  );
  const [department, setDepartment] = useState(
    isUpdate ? employee.department : ""
  );
  const [position, setPosition] = useState(isUpdate ? employee.position : "");
  const [income, setIncome] = useState(isUpdate ? employee.income : "");
  const [hiringDate, setHiringDate] = useState(
    isUpdate ? employee.hiringDate : ""
  );
  const [modality, setModality] = useState(isUpdate ? employee.modality : "");
  const [image, setImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name,
      status,
      gender,
      phone,
      email,
      location: { city, country },
      department,
      position,
      income,
      hiringDate,
      modality,
      picture: image,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/employees${
          isUpdate ? `/${employee.id}` : ""
        }`,
        {
          method: isUpdate ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigate(`/employees/${data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div className="form-group1">
        <TextInput
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-input1"
        />
        <TextInput
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={email && !/\S+@\S+\.\S+/.test(email)} // Check if email format is valid
          errorLabel="Invalid email address"
          className="text-input1"
        />
      </div>
      <div className="form-group2-3">
        <div className="form-group2">
          <Select
            label="Status"
            value={status}
            onChange={(value) => setStatus(value)}
            data={["Active", "Terminated"]}
            required
          />
          <TextInput
            label="Gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <TextInput
            label="Phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
          />
          <TextInput
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextInput
            label="Country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group3">
          <TextInput
            label="Department"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextInput
            label="Position"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextInput
            label="Hiring Date"
            type="date"
            value={hiringDate}
            onChange={(e) => setHiringDate(e.target.value)}
          />
          <TextInput
            label="Initial Salary"
            placeholder="Initial Salary"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
          <TextInput
            label="Modality"
            placeholder="Modality"
            value={modality}
            onChange={(e) => setModality(e.target.value)}
          />
          <div
            style={{
              marginBottom: theme.spacing.sm,
              marginTop: theme.spacing.sm,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </div>
          <Button type="submit" style={{ marginTop: theme.spacing.sm }}>
            {isUpdate ? "Update" : "Add New"} Employee
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
