import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { Link as RouterLink } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/", scrollTo: "aboutus" }, // Add scrollTo property
    { name: "Contact Us", path: "/", scrollTo: "contact" },
    { name: "Learning", path: "/learning" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-md fixed top-0 w-full z-50 font-poppins">
      <img
        src="https://coursepirate.freewebhostmost.com/image/logo.jpg"
        alt="Logo"
        className="h-[4rem] w-auto"
      />
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-[#ffbd59] transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#ffbd59] transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <ul className={`md:flex md:items-center md:gap-6 list-none hidden`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="font-bold text-lg transition text-[#ffbd59] hover:text-[#f2dbb9] duration-300 relative cursor-pointer"
          >
            {item.path ? (
              <RouterLink
                to={item.path}
                onClick={() => {
                  closeMobileMenu();
                  if (item.scrollTo) {
                    // Scroll to the specific section
                    setTimeout(() => {
                      const element = document.getElementById(item.scrollTo);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 0);
                  }
                }}
              >
                {item.name}
              </RouterLink>
            ) : (
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.name}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>

      {isOpen && (
        <ul
          className={`flex flex-col justify-center items-center gap-3 h-screen md:hidden list-none text-white bg-[black]/100 backdrop-filter backdrop-blur-md absolute top-24 transition-transform duration-300 ease-in-out right-0 w-full z-50 transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="font-bold text-lg transition text-white hover:text-white duration-300 relative cursor-pointer"
            >
              {item.path ? (
                <RouterLink
                  to={item.path}
                  onClick={() => {
                    closeMobileMenu();
                    if (item.scrollTo) {
                      // Scroll to the specific section
                      setTimeout(() => {
                        const element = document.getElementById(item.scrollTo);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 0);
                    }
                  }}
                >
                  {item.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
