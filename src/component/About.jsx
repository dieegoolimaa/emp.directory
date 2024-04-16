import "./component-style/about.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="about">
        <h2>(TIED)</h2>
        <p>Tech Innovators Employee Directory </p>
        <h3>
          {" "}
          <strong> History </strong>{" "}
        </h3>
        Founded in the beginning of 2021 by visionary entrepreneurs, Tech
        Innovators started as a small software development firm. Over the years,
        we’re growing into a global technology powerhouse, serving Fortune 500
        companies across diverse industries.
        <h3>
          {" "}
          <br />
          <br />
          <strong>Company Overview:</strong>{" "}
        </h3>
        <strong> Mission </strong> At Tech Innovators, our mission is to empower
        businesses through cutting-edge technology solutions. We believe in
        driving innovation, fostering collaboration, and delivering exceptional
        value to our clients.
        <br />
        <br />
        <h3>
          {" "}
          <strong>Values</strong>
        </h3>
        <p>
          {" "}
          <strong>Innovation</strong>: <br />
          We thrive on creativity and embrace new ideas.
        </p>
        <p>
          {" "}
          <strong>Integrity</strong>: <br />
          We uphold honesty, transparency, and ethical conduct.
        </p>
        <p>
          {" "}
          <strong>Teamwork</strong>: <br />
          Together, we achieve more than we can individually.
        </p>
      </div>

      <div className="container">
        <div className="column">
          <img src="Public/Images/Diego.jpg" alt="Diego Fernandes" />
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
          <img src="Public/Images/Celso.jpg" alt="Celso Gando" />
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
          <img src="Public/Images/Rui.jpg" alt="Rui Folgado" />
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
