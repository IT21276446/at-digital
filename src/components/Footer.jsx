import React from "react";
import "../styles/Footer.css";
import sc from "../images/Logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <img
                src={sc}
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "250px" }}
              />
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve a single objective -
                your business results.
              </p>
            </div>

            <div className="footer-right">
              <div className="column">
                <div className="column1">
                  <h3>Our Technologies</h3>
                  <ul>
                    <li>ReactJS</li>
                    <li>Gatsby</li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>GraphQL</li>
                    <li>Laravel</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="column2">
                  <h3>Our Services</h3>
                  <ul>
                    <li>Social Media Marketing</li>
                    <li>Web & Mobile App Development</li>
                    <li>Data & Analytics</li>
                    <li>Google Marketing Solutions</li>
                    <li>Search Engine Optimizations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footer-nav">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
