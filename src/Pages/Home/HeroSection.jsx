export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Anas Khan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Data Analyst</span>{" "}
            <br />
            And an aspiring mentor for new graduates
          </h1>
          <p className="hero--section-description">
            I have been navigating the world of undergraduate recruitement,
            career planning and more...
            <br /> Want to know how I can help you?
          </p>

          <button className="btn btn-primary" onClick={scrollToContact}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/anas1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
