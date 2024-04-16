import "./component-style/about.css";

function About() {
  return (
    <div>
      <div className="about">
        <h1>About</h1>
        <h2>(TIED)</h2>
        <p>Tech Innovators Employee Directory </p>

        <h3> <strong> History </strong> </h3>
        Founded in the beginning of 2021 by visionary entrepreneurs, Tech Innovators started as a small software development firm.
        Over the years, we’re growing into a global technology powerhouse, serving Fortune 500 companies across diverse industries.

        <h3> <strong>Company Overview</strong> </h3>
        <strong> Mission </strong>: At Tech Innovators, our mission is to empower businesses through cutting-edge technology solutions.
        We believe in driving innovation, fostering collaboration, and delivering exceptional value to our clients.

        <h3> <strong>Values</strong> </h3>

        <p> <strong>Innovation</strong>: We thrive on creativity and embrace new ideas.</p>
        <p> <strong>Integrity</strong>: We uphold honesty, transparency, and ethical conduct.</p>
        <p> <strong>Teamwork</strong>: Together, we achieve more than we can individually.</p>
      </div>

      <div className="container">
        <div className="column">
          <h2> Diego Lima</h2>
          <p> <strong>Role: </strong>FrontEnd Developer</p>
          <p> <strong>Email: </strong> dieegoolimaa@gmail.com</p>
          <p> <strong>LinkedIn: </strong>#</p>
          <p> <strong>Github: </strong> https://github.com/dieegoolimaa</p>
          <img src="Public/Images/Diego.jpg" alt="Diego Lima" />
        </div>

        <div className="column">
          <h2>Celso Gando</h2>
          <p> <strong> Role:</strong> FrontEnd Dev</p>
          <p> <strong>Email: </strong> MrGandomaestro@outlook.com</p>
          <p> <strong> LinkedIn: </strong> www.linkedin.com/in/celso-gando-301b072b1</p>
          <p> <strong> GitHub: </strong> https://github.com/TheOne-1-dot</p>
          <img src="Public/Images/Celso.jpg" alt="Celso Gando" />
        </div>

        <div className="column">
          <h2>Rui Folgado</h2>
          <p> <strong>Role: </strong> Full Stack Developer</p>
          <p> <strong>Email: </strong> rui.folgado@hotmail.com</p>
          <p> <strong>LinkedIn: </strong> #</p>
          <p> <strong>GitHub: </strong> https://github.com/Folgad0</p>
          <img src="Public/Images/Rui.jpg" alt="Rui Folgado" />
        </div>
      </div>
    </div>
  );
}

export default About;
