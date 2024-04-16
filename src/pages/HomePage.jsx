import "./pages-style/homepage.css";
import Future_Tech_Innovations from "./component/logos/future_tech.gif";
import Advanced_Robotics_Corp from "./component/logos/advanced_robotics.jpg";
import Quantum_Computing_Solutions from "./component/logos/quantum_c.s..gif"; // Quantum Computing Solutions
import Alpha_Energy_Dynamics from "./component/logos/alpha_energy_d.jpg";

function HomePage() {
  // Companies List
  const companies = [
    {
      name: "Future Tech Innovations",
      logo: Future_Tech_Innovations,
    },
    {
      name: "Advanced Robotics Corp",
      logo: Advanced_Robotics_Corp,
    },
    {
      name: "Quantum Computing Solutions",
      logo: Quantum_Computing_Solutions,
    },
    {
      name: "Alpha Energy Dynamics",
      logo: Alpha_Energy_Dynamics,
    },
    {
      name: "Data Science Analytics Ltd",
      logo: "./component/logos/data_science.gif",
    },
    {
      name: "Cyber Security Associates",
      logo: "./component/logos/cyber_security.jpg",
    },
  ];

  return (
    <div className="home-page">
      <h1>Welcome to TD - Tech Innovators</h1>
      <p>Your trusted partner in innovation.</p>

      {/* Other content here */}

      <div className="companies-section">
        <h2>Companies We have Worked With</h2>
        <div className="companies-list">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <img src={company.logo} alt={company.name} />
              <h3>{company.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
