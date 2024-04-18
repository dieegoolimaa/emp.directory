import "./component-style/about.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import imgDiego from "./images/Diego.jpg";
import imgCelso from "./images/Celso.jpg";
import imgRui from "./images/Rui.jpg";

function About() {
  return (
    <div>
      <div className="about">
        <h2 id="title-about">(TIED)</h2>
        <h2 id="subtitle-about">Tech Innovators Employee Directory </h2>
        <div className="container-about">
          <h3>
            <strong> History </strong>
          </h3>
          <strong> 2022: Launch and Initial Growth </strong>
          In the early 2022, TIED made its online platform public. The platform
          was warmly welcomed, attracting thousands of users in just a few
          months. In addition, the company formed alliances with several
          businesses, which helped to broaden the directory’s offerings.
          <br />
          <br />
          <strong> 2023: Expansion and Innovation </strong>
          TIED concentrated on broadening its services and bringing innovation
          to its platform. They rolled out new features, including advanced
          search options and personalized suggestions. To support its growth,
          the company increased its workforce and relocated to a more spacious
          office in Portugal.
          <br />
          <br />
          <strong> 2024: Recognition, Achievements and Future Plans </strong>
          <strong>Here are some of the key achievements:</strong>
          <br />
          <strong>Partnership with Ironhacks</strong>
          TIED is in talks with Ironhacks, a renowned Global Tech School 
          ranked top 2 worldwide, to integrate
          our services into their platform. This partnership will help our
          users, should they want to change careers, the ability to apply through
          us and get a discount when they register and a package where tutors 
          are available on saturdays during their project period.
          <br />
          <br />
          <strong>Expansion in Germany</strong>
          TIED plans to expand its presence in Germany by partnering with local
          businesses. This will not only diversify our Directory offerings but
          also help us reach a larger audience.
          <br />
          <br />
          <strong>User Growth</strong>
          By the end of 2024, TIED aims to double its user base, reaching over 
          1000 active users.
          <br />
          <br />
          <strong> Mission </strong>
          At Tech Innovators, our mission is to empower businesses through
          cutting-edge technology solutions. We believe in driving innovation,
          fostering collaboration, and delivering exceptional value to our
          clients.
          <strong>Integrity</strong>
          We uphold honesty, transparency, and ethical conduct.
        </div>
      </div>

      <div className="container">
        <div className="column">
          <img src={imgDiego} />
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
          <img src={imgCelso} alt="Celso Gando" />
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
          <img src={imgRui} alt="Rui Folgado" />
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
