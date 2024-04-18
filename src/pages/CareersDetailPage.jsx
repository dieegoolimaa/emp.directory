import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pages-style/jobdetailspage.css";
import { Button } from "@mantine/core";
import { SlHome } from "react-icons/sl";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const CareersDetailPage = () => {
  const { careerId } = useParams(); // Get the career ID from the URL parameter
  const [careerDetails, setCareerDetails] = useState(null);

  // Fetch career details based on the careerId
  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/careers/${careerId}`
        );
        if (response.ok) {
          const data = await response.json();
          setCareerDetails(data);
        }
      } catch (error) {
        console.error("Error fetching career details:", error);
      }
    };

    fetchCareerDetails();
  }, [careerId]);

  // Render career details if available
  if (!careerDetails) {
    return <p>Loading career details...</p>;
  }

  const {
    jobTitle,
    company,
    description,
    // Add other relevant details here (e.g., department, location)
  } = careerDetails;

  return (
    <div className="backgroundjobs">
      <div className="career-details-container">
        <h2>{jobTitle}</h2>
        <div className="career-details">
          <p>{description}</p> 
        </div>
        <h3>About the Role</h3>
        <p>{description}</p> 
        <h3>Responsibilities</h3>
        <ul>
          <li>Lead and manage a team of account managers...</li>
          <li>Develop and execute strategic account plans...</li>
          <li>Identify and develop new business opportunities...</li>
        </ul>
        <h3>Requirements</h3>
        <ul>
          <li>Proven experience in account management...</li>
          <li>Strong understanding of the mobile games industry...</li>
          <li>Excellent communication and interpersonal skills...</li>
        </ul>
        <h3>Benefits</h3>
        <ul>
          <li>Competitive salary and benefits package...</li>
          <li>Opportunity to work with a talented and passionate team...</li>
          <li>Be part of a company shaping the future of gaming...</li>
        </ul>
        <div className="btn-container">
          <Button type="button">Apply Now</Button>
        </div>
        <div className="move-buttons">
          <Link to="/">
            <Button type="button">
              <SlHome />
            </Button>
          </Link>
          <Link to={`/career`}>
            <Button type="button">
              <TiArrowBackOutline />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersDetailPage;
