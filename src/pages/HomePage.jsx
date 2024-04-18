import React, { useState } from "react";
import "./pages-style/homepage.css";
import Future_Tech_Innovations from "./logos/future_tech.gif";
import Advanced_Robotics_Corp from "./logos/advanced_robotics.jpg";
import Quantum_Computing_Solutions from "./logos/quantum_c.s..gif";
import Alpha_Energy_Dynamics from "./logos/alpha_energy_d.jpg";
import Data_Science_Analytics_Ltd from "./logos/data_science.gif";
import Cyber_Security_Associates from "./logos/cyber_security.jpg";
import Jane_Doe_Testimonial from './testimonials/jane_doe_testimonials.jpg';
import John_Smith_Testimonial from './testimonials/john_smith_testimonials.jpg';
import Bob_Williams_Testimonial from './testimonials/bob_williams_testimonials.jpg';
import Alice_Johnson_Testimonial from './testimonials/alice_johnson_testimonials.jpg';

function HomePage() {
  const testimonials = [
    { img: Jane_Doe_Testimonial, name: "Jane Doe", company: "FutureTech" },
    { img: John_Smith_Testimonial, name: "John Smith", company: "Advanced Robotics" },
    { img: Bob_Williams_Testimonial, name: "Bob Williams", company: "Quantum Computing" },
    { img: Alice_Johnson_Testimonial, name: "Alice Johnson", company: "Alpha Energy" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextClick = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      <div>
        <h1>
          WELCOME TO <br /> TECH INNOVATORS
        </h1>
    <p>Your trusted partner in innovation.</p>
      </div>
      <div className="empty-container"></div>

      <div className="testimonial-section" style={{ display: 'flex', alignItems: 'center' }}>
  <button onClick={handlePrevClick} style={{ marginRight: '20px', color: 'blue' }}>←</button>
  <img src={testimonials[currentTestimonial].img} alt={`${testimonials[currentTestimonial].name} Testimonial`} />
  <button onClick={handleNextClick} style={{ marginLeft: '20px', color: 'blue' }}>→</button>
</div>


      <div>
        <h2>Companies we worked with:</h2>
        <div className="companies-section">
          <div className="company-container">
            <img src={Future_Tech_Innovations} alt="Future Tech Innovations" />
            <h3>Future Tech Innovations</h3>
          </div>
          <div className="company-container">
            <img src={Advanced_Robotics_Corp} alt="Advanced Robotics Corp" />
            <h3>Advanced Robotics Corp</h3>
          </div>
          <div className="company-container">
            <img
              src={Quantum_Computing_Solutions}
              alt="Quantum Computing Solutions"
            />
            <h3>Quantum Computing Solutions</h3>
          </div>
          <div className="company-container">
            <img src={Alpha_Energy_Dynamics} alt="Alpha Energy Dynamics" />
            <h3>Alpha Energy Dynamics</h3>
          </div>
          <div className="company-container">
            <img
              src={Data_Science_Analytics_Ltd}
              alt="Data Science & Analytics Ltd"
            />
            <h3>Data Science & Analytics Ltd</h3>
          </div>
          <div className="company-container">
            <img
              src={Cyber_Security_Associates}
              alt="Cyber Security Associates"
            />
            <h3>Cyber Security Associates</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
