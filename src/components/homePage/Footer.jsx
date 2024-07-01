import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer-col">
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
            alt=""
          />
          <p class="footer-para">
            TM & © 2024 Warner Bros. Entertainment Inc. All rights reserved
          </p>
        </div>
        <div class="footer-col">
          <h3 class="text-office">
            Company
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <p>Press Releases</p>
          <p>Careers</p>
          <p>International</p>
        </div>
        <div class="footer-col">
          <h3>
            Terms of Use
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sourced Traffic Disclosure</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>
            Follow Us
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <form action="">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Company Email"></input>
            <a href="">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </form>
          <div class="social-icons">
            <a href="https://www.facebook.com/warnerbrosent/">
              <FacebookOutlinedIcon />
              {/* <i class="fa-brands fa-facebook"></i> */}
            </a>
            <a href="https://www.instagram.com/warnerbrosentertainment/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/user/WarnerBrosPictures">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://x.com/Warnerbros/?mx=2">
              <i class="fa-brands fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
