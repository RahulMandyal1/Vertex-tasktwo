import React from "react";
import "./footer.css";
import ColHeading from "./ColHeading";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex-23 footer-col">
          <ColHeading headingText={"Vertex"} />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex-23 footer-col">
          <ColHeading headingText={"Quick Links"} />
          <nav className="flex-col footer-menus">
            <li>About</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Service</li>
            <li>Contact</li>
          </nav>
        </div>
        <div className="flex-23 footer-col">
          <ColHeading headingText={"Contact Information"} />
          <nav className="flex-col footer-menus">
            <li>Khaniyara khas 198, Dharmshala Himachal Pradesh</li>
            <li>+1987654321</li>
            <li>info@yoursite.com</li>
            <li>email@email.com</li>
          </nav>
        </div>
        <div className="flex-23 social-icons-container">
          <div className="social-icon ">
            <AiOutlineFacebook fontSize={30} />
          </div>
          <div className="social-icon">
            <AiOutlineInstagram fontSize={30} />
          </div>
          <div className="social-icon">
            <AiOutlineTwitter fontSize={30} />
          </div>
        </div>
      </div>
      <small className="copyright-info">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </small>
    </footer>
  );
}

export default Footer;
