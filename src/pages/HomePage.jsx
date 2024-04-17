import "./pages-style/homepage.css";
import Future_Tech_Innovations from "./logos/future_tech.gif";
import Advanced_Robotics_Corp from "./logos/advanced_robotics.jpg";
import Quantum_Computing_Solutions from "./logos/quantum_c.s..gif";
import Alpha_Energy_Dynamics from "./logos/alpha_energy_d.jpg";
import Data_Science_Analytics_Ltd from "./logos/data_science.gif";
import Cyber_Security_Associates from "./logos/cyber_security.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <div>
        <h1>
          WELCOME TO <br /> TECH INNOVATORS
        </h1>
        <p>Your trusted partner in innovation.</p>
      </div>
      <div className="empty-container"></div>
      <div>
        <h2>Companies we work with:</h2>
        <div className="companies-section">
          <div className="company-container">
            <img src={Future_Tech_Innovations} alt="Future_Tech_Innovations" />
            <h3>Future Tech Innovations</h3>
          </div>
          <div className="company-container">
            <img src={Advanced_Robotics_Corp} alt="Advanced_Robotics_Corp" />
            <h3>Advanced Robotics Corp</h3>
          </div>
          <div className="company-container">
            <img
              src={Quantum_Computing_Solutions}
              alt="Quantum_Computing_Solutions"
            />
            <h3>Quantum Computing Solutions</h3>
          </div>
          <div className="company-container">
            <img src={Alpha_Energy_Dynamics} alt="Alpha_Energy_Dynamics" />
            <h3>Alpha Energy Dynamics</h3>
          </div>
          <div className="company-container">
            <img
              src={Data_Science_Analytics_Ltd}
              alt="Data_Science_Analytics_Ltd"
            />
            <h3>Data Science & Analytics Ltd</h3>
          </div>
          <div className="company-container">
            <img
              src={Cyber_Security_Associates}
              alt="Cyber_Security_Associates"
            />
            <h3>Cyber Security Associates</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
