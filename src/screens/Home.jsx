import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      {/* First Section */}
      <section className="first-section">
        <div className="image-container-main">
          <img src="src\images\bg.png" alt="Your Image" />
          <div className="gradient-overlay">
            <p>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <Button label="GET FREE CONSULTATION" type="button" />
          </div>
        </div>
      </section>

      <div className="second-section">
        <div className="row">
          {/* First row, first column */}
          <div className="col-md-6 order-md-1">
            <div className="image-container d-flex align-items-center justify-content-center">
              <img
                src="src\images\image2.png"
                alt="Image1"
                className="img-fluid"
              />
            </div>
          </div>
          {/* First row, second column */}
          <div className="col-md-6 order-md-2">
            <div className="text-content">
              <h2>Web & Mobile App Development</h2>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button label={"LEARN MORE"} type="button"></Button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Second row, first column */}
          <div className="col-md-6 order-md-1">
            <div className="text-content">
              <h2>Digital Strategy Consulting</h2>
              <p>
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <Button label={"LEARN MORE"} type="button"></Button>
            </div>
          </div>
          {/* Second row, second column */}
          <div className="col-md-6 order-md-2">
            <div className="image-container d-flex align-items-center justify-content-center">
              <img
                src="src\images\image1.png"
                alt="Image2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
