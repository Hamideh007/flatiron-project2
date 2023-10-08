import { Link, Outlet } from "react-router-dom";
import myImg from '../assets/myImg.jpg';
import orchidImg from '../assets/img2.jpg';

function About() {
  const scrollToBottom = () => {
    const bottomElement = document.getElementById("bottom");
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="about">
      <div className="orchid-about">
        <div className="about-orchid-text">
          <h2>About the World of Orchids</h2>
          <p>
            Orchids are a diverse and fascinating group offlowering plants
            known for their stunning and unique blooms.With over 25,000species,
            orchids can be found in nearly every corner of the world,from 
            lush rainforests to arid deserts.
          </p>
          <p>
            As a plant biologist with a Ph.D. in plant biology, I've dedicated
            my life to understanding the intricate beauty and ecological
            significance of orchids. Through this project, I aim to share my
            passion for these remarkable plants with the world.
          </p>
        </div>
        <div className="about-orchid-image">
          <img
             src={orchidImg} alt="orchid" />
        </div>
      </div>
      <div className="me-about">
        <div className="about-me-image">
          <img 
          src={myImg} alt="me" />
        </div>
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I'm an avid orchid enthusiast with a deep love for botanical
            exploration and cultivation. Through this platform, I invite you to
            explore the enchanting world of orchids with me.
          </p>
          <p>Discover unique orchid varieties
            and share your own orchid stories!</p>
        </div>
      </div>
      <div className="about-links">
        <Link to="/about/contactme" onClick={scrollToBottom}>
          Get in Touch
        </Link>
        <Link to="/about/faqs" onClick={scrollToBottom}>
          FAQs
        </Link>
      </div>
      <Outlet />
      <div id="bottom" style={{ paddingBottom: "30vh" }} />
    </div>
  );
}

export default About;
