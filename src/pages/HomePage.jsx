import "./pages-style/homepage.css";

function HomePage() {
  // Companies List
  const companies = [
    {
      name: "Future Tech Innovations",
      logo: "./component/logos/future_tech.gif",
    },
    {
      name: "Advanced Robotics Corp",
      logo: "./component/logos/advanced_robotics.jpg",
    },
    {
      name: "Quantum Computing Solutions",
      logo: "./component/logos/quantum_c.s..gif",
    },
    {
      name: "Alpha Energy Dynamics",
      logo: "./component/logos/alpha_energy_d.jpg",
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
