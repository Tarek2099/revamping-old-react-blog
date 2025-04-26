import React from "react";
import "../../App";
import Gallery from "./Gallery";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footerPart1">
              <h2 className="footerBrand">My Blog</h2>
              <p className="brandBrief">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="footerPart2">
              <h4>Links</h4>
              <div className="links">
                <a href="/">FAQ</a>
                <a href="/">Terms of Use</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Gallery</a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4>Gallary</h4>
            <div className="footerPart3">
              <Gallery />
            </div>
          </div>
          <div className="col-3">
            <div className="footerPart4">
              <h4>Contact</h4>
              <div className="contactBody">
                <h6>+8801790213896</h6>
                <h6>mdtarekrahman@gmail.com</h6>
                <div className="footerSocialicon">
                  <a href="/">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-discord"></i>
                  </a>
                  <a href="/">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="copyrights">
            © 2022 All Rights Reserved.Developed by MD Tarek Rahman
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
