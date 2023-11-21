import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/ibrahim-kedir/" target="_blank" rel="noopener noreferrer" >
            <LinkedInIcon />
          </a>
          {/* Email Icon with a mailto link */}
          <a href="mailto:ibrahim.kedir@outlook.com">
            <EmailIcon />
          </a>

          {/* GitHub Icon with a link */}
          <a href="https://github.com/ibrahimkedir10" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        
      </div>
      <p> &copy; Ibrahimkedir.com</p>
    </div>
  );
}

export default Footer;
