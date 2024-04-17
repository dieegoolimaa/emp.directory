import "./component-style/about.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="about">
        <h2>(TIED)</h2>
        <u>Tech Innovators Employee Directory </u>

        <br />

        <h3>
          {" "}
          <strong> History </strong>{" "}
        </h3>
        
        <strong> 2022: Launch and Initial Growth </strong>
        In the early 2022, TIED made its online platform public.
        The platform was warmly welcomed, attracting thousands of users in just a few months.
        In addition, the company formed alliances with several businesses,
        which helped to broaden the directory’s offerings.

        <strong> 2023: Expansion and Innovation </strong>
        TIED concentrated on broadening its services and bringing innovation to its platform.
        They rolled out new features, including advanced search options and personalized suggestions.
        To support its growth, the company increased its workforce and relocated to a more spacious office.
        
        <br />

        <strong> 2024: Recognition, Achievements and Future Plans </strong>
        
        <br />

        <strong>Here are some of the key achievements:</strong>
        <strong>Partnership with Ironhacks</strong> 
        TIED is in talks with Ironhacks, a renowned tech company, to integrate their services into our platform. <br />
        This partnership will provide our users with access to a wider range of tech resources.
       
       <strong>Expansion in Germany</strong> 
       TIED plans to expand its presence in Germany by partnering with local businesses. <br />
       This will not only diversify our Directory offerings but also help us reach a larger audience.

       <strong>User Growth</strong> 
       By the end of 2024, TIED aims to double its user base, reaching over 1 million active users.

        <strong> Mission </strong> 
        At Tech Innovators, our mission is to empower
        businesses through cutting-edge technology solutions.<br /> We believe in
        driving innovation, fostering collaboration, and delivering exceptional
        value to our clients.
        
        <p>
          {" "}
          <strong>Integrity</strong>: <br />
          We uphold honesty, transparency, and ethical conduct.
        </p>
        
      </div>

      <div className="container">
        <div className="column">
          <img src="./Images/Diego.jpg" alt="Diego Fernandes" />
          <h2>Diego Fernandes</h2>
          <p>Full Stack Developer</p>
          <p>
            <MdEmail /> <a href="mailto:dieegoolimaa@gmail.com">Email</a>
          </p>
          <p>
            <FaLinkedin />{" "}
            <a href="https://www.linkedin.com/in/diego-fernandes-20/">
              LinkedIn
            </a>
          </p>
          <p>
            <FaGithubSquare />{" "}
            <a href="https://github.com/dieegoolimaa">GitHub</a>
          </p>
        </div>

        <div className="column">
          <img src="./Images/Celso.jpg" alt="Celso Gando" />
          <h2>Celso Gando</h2>
          <p>Full Stack Developer</p>
          <p>
            <MdEmail /> <a href="mailto:MrGandomaestro@outlook.com">Email</a>
          </p>
          <p>
            <FaLinkedin />{" "}
            <a href="https://www.linkedin.com/in/celso-gando-301b072b1/">
              LinkedIn
            </a>
          </p>
          <p>
            <FaGithubSquare />{" "}
            <a href="https://github.com/TheOne-1-dot">GitHub</a>
          </p>
        </div>

        <div className="column">
          <img src="./Images/Rui.jpg" alt="Rui Folgado" />
          <h2>Rui Folgado</h2>
          <p>Full Stack Developer</p>
          <p>
            <MdEmail /> <a href="mailto:rui.folgado@hotmail.com">Email</a>
          </p>
          <p>
            <FaLinkedin /> Not available
          </p>
          <p>
            <FaGithubSquare />
            <a href="https://github.com/Folgad0"> GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
