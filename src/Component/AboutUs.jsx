import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
        {/* Image Section */}
        <img
          src="https://coursepirate.freewebhostmost.com/image/ABOUT US.jpg"
          alt="About Us"
          className="w-full md:w-1/2 h-auto mb-8 md:mb-0 rounded-lg shadow-lg"
        />

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-8">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            About Us
          </h2>
          <p className="text-lg mb-4 text-justify">
            We are dedicated to providing a comprehensive platform for comparing
            IT courses across various platforms. Our mission is to help learners
            make informed decisions by comparing courses based on price,
            quality, and reviews.
          </p>
          <p className="text-lg mb-4 text-justify">
            With a wide array of curated courses from top educators and
            institutions, we ensure that our users can find the most suitable
            courses to enhance their skills and career prospects. Whether you
            are a beginner or a seasoned professional, we have something for
            everyone.
          </p>
          <p className="text-lg text-justify">
            Join us on this journey of knowledge and growth. Start comparing and
            purchasing courses today, and take your skills to the next level
            with ease!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
