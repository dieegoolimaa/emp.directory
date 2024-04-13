import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core'; // For Mantine
const API_URL = 'http://localhost:4000';

const EmployeeForm = ({ employee, isUpdate = false }) => {
  const [name, setName] = useState(isUpdate ? employee.name : '');
  const [status, setStatus] = useState(isUpdate ? employee.status : 'Active');
  const [gender, setGender] = useState(isUpdate ? employee.gender : '');
  const [phone, setPhone] = useState(isUpdate ? employee.phone : '');
  const [email, setEmail] = useState(isUpdate ? employee.email : '');
  const [city, setCity] = useState(isUpdate ? employee.location.city : '');
  const [country, setCountry] = useState(isUpdate ? employee.location.country : '');
  const [department, setDepartment] = useState(isUpdate ? employee.department : '');
  const [position, setPosition] = useState(isUpdate ? employee.position : '');
  const [hiringDate, setHiringDate] = useState(isUpdate ? employee.hiringDate : '');
  const [modality, setModality] = useState(isUpdate ? employee.modality : '');
  const navigate = useNavigate();

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
      hiringDate,
      modality,
    };

    try {
      const response = await fetch(`${API_URL}/employees${isUpdate ? `/${employee.id}` : ''}`, {
        method: isUpdate ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        navigate(`/employees/${data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <label>
            Name: <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Status:{' '}
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Terminated">Terminated</option>
            </select>
          </label>
        </li>
        <li>
          <label>
            Gender: <input value={gender} onChange={(e) => setGender(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Phone: <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            City: <input value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Country: <input value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Department: <input value={department} onChange={(e) => setDepartment(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Position: <input value={position} onChange={(e) => setPosition(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Hiring Date:{' '}
            <input type="date" value={hiringDate} onChange={(e) => setHiringDate(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Modality: <input value={modality} onChange={(e) => setModality(e.target.value)} />
          </label>
        </li>
      </ul>
      <Button type="submit">
        {isUpdate ? 'Update' : 'Add New'} Employee
      </Button>
    </form>
  );
}

export default EmployeeForm;
