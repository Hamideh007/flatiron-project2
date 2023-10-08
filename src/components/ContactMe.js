function ContactMe() {
    return (
      <div className="contact-me" id="contact-me">
        <h3>You can find me on</h3>
        <div className="contact-me-links">
        <a href='https://github.com/Hamideh007' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
          href='https://www.linkedin.com/in/mahtab-rahmani-97b9b772'target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
          <a href="https://medium.com/@rahmani.mahtab" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-medium"></i>
          </a>
          <a href="mailto:Rahmani.mahtab@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
  
  export default ContactMe;