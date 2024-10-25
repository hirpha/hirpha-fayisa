export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Hirpha Fayisa</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a full-stack developer with expertise in both frontend and
            backend, focused on creating responsive and high-quality
            applications.
          </p>
        </div>
        <div className="hero--section--buttons">
          <button className="btn btn-primary">Get In Touch</button>
          <a href="/Hirpha_Fayisa_3Years_Fullstack_Developer.pdf" download>
            <button className="btn btn-secondary">Download CV</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
