import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";

// Updated data array
const people = [
  {
    name: "Snehil Singh",
    image: "https://coursepirate.freewebhostmost.com/image/snehil.jpg",
    Team: "Byte Bandits",
  },
  {
    name: "Rohan Keshri",
    image: "https://coursepirate.freewebhostmost.com/image/rohan.jpg", // Replace with actual image paths
    Team: "Byte Bandits",
  },
  {
    name: "Ajay Mehra",
    image: "https://coursepirate.freewebhostmost.com/image/mehra.jpg",
    Team: "Byte Bandits",
  },
  {
    name: "Milli Srivastava",
    image: "https://coursepirate.freewebhostmost.com/image/milli.jpg",
    Team: "Byte Bandits",
  },
  {
    name: "Ansh Sharma",
    image: "https://coursepirate.freewebhostmost.com/image/ansh.jpg",
    Team: "Byte Bandits",
  },
];

const Myteam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // Duration between slides
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-2">
        <h2
          className="text-5xl mx-auto py-1 border w-fit px-3 rounded-full text-black text-center shadow-lg bg-white opacity-50 backdrop-filter backdrop-blur-lg"
          style={{ fontFamily: "sans-serif" }}
        >
          Our Team
        </h2>
      </div>

      <div className="carousel-container flex flex-col ">
        <Slider {...settings}>
          {people.map((person, index) => (
            <div key={index} className="card mx-2 border-none">
              <img
                src={person.image}
                alt={person.name}
                className="card-image"
              />
              <h3 className="card-name text-sm md:text-2xl">{person.name}</h3>
              <p className="text-white card-description">{person.Team}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Myteam;
