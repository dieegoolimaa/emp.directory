
import "./pages-style/homepage.css";

function HomePage() {
  // List of companies
  const companies = [
    { name: 'Company 1', logo: 'logo1.png' },
    { name: 'Company 2', logo: 'logo2.png' },
    { name: 'Company 3', logo: 'logo3.png' },
    // Add more companies as needed
  ];

  return (
    <div className="home-page">
      <h1>Welcome to TD - Tech Innovators</h1>
      <p>Your trusted partner in innovation.</p>

      <h2>Companies We have Worked With</h2>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={company.name} />
            <h3>{company.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
