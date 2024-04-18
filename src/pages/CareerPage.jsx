import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages-style/careers.css";
import { SlHome } from "react-icons/sl";
import { TiArrowBackOutline } from "react-icons/ti";
import { Button } from "@mantine/core";

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCareers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/careers`);
      if (response.ok) {
        const data = await response.json();
        setCareers(data);
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCareers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="career-page">
      <h1>Available Job Opportunities</h1>
      <div>
        <ul>
          {careers.map((career) => (
            <li key={career.id}>
              <Link to={`/career/${career.id}`}>
                <p style={{ fontSize: "1.3rem" }}>{career.jobTitle}</p>
                <p style={{ color: "#484848" }}>{career.department}</p>
                <p style={{ fontWeight: "lighter" }}>
                  {career.company} - {career.location}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareersPage;
