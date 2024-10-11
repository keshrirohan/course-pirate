import React from "react";
import AnimatedText from "./AnimatedText";
import AboutUs from "./AboutUs";
import Myteam from "./Myteam";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        style={{
          backgroundImage:
            "url(https://coursepirate.freewebhostmost.com/image/MAIN.jpg)", // Ensure the image path is correct
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="flex justify-center items-center h-screen">
          <AnimatedText />
        </div>
      </div>
      <div id="aboutus">
        {" "}
        {/* Set ID for About Us section */}
        <AboutUs />
      </div>
      <div
        id="team" // Set ID for Team section
        className="flex flex-col"
        style={{
          backgroundImage: "url(/image/team.jpg)", // Ensure this image path is correct
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Myteam />
      </div>
      <div id="contact">
        {" "}
        {/* Set ID for Contact Us section */}
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
