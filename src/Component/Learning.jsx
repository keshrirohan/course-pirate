import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig"; // Import the Firebase instance
import { ref, onValue } from "firebase/database";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Learning = () => {
  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(null); // State to track the open card index
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedType, setSelectedType] = useState(""); // State for selected type
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const coursesPerPage = 10; // Number of courses per page

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index); // Toggle the accordion state
  };

  useEffect(() => {
    const coursesRef = ref(db, "couses"); // Ensure the correct path is used
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      const courseList = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setCourses(courseList);
    });
  }, []);

  // Filter courses based on search query and selected type
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType
      ? course.type.toLowerCase().includes(selectedType.toLowerCase())
      : true; // Adjust this based on your data structure
    return matchesSearch && matchesType;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Calculate courses to display on the current page
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/image/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome to the Learning Section</h1>
        <p className="mt-4 text-lg">
          Here, you can explore various courses and enhance your skills!
        </p>

        {/* Search Bar */}
        <div className="mt-6" style={{ width: "100%", maxWidth: "600px" }}>
          <input
            className="text-black p-2 rounded-full"
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="mt-4" style={{ width: "100%", maxWidth: "600px" }}>
          <select
            className="text-black p-2 rounded-full"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          >
            <option value="">All Types</option>
            <option value="ruby">Ruby</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center mt-8">
        {currentCourses.length > 0 ? (
          currentCourses.map((course, index) => (
            <div
              key={course.id}
              className="max-w-sm overflow-hidden md:w-[50%] lg:w-[30%] w-[100%] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
            >
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-t-lg h-48 w-full object-cover" // Set a fixed height and use object-cover to maintain aspect ratio
                  src={`/image/${course.image}`} // Ensure this path is correct
                  alt={course.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/image/fallback.jpg"; // Fallback image
                  }}
                />
              </a>
              <div className={`p-5 flex flex-col h-[300px] justify-between bg-black`}>
                <span className="text-lg text-white font-semibold">
                  {course.price === "0" ? "Free" : `₹ ${course.price}`}
                </span>
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {course.name}
                  </h5>
                </a>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="text-blue-500 focus:outline-none"
                  >
                    {isOpen === index ? "Hide Description" : "Show Description"}
                  </button>
                </div>
                {isOpen === index && (
                  <div className="mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <p>{course.description}</p>
                  </div>
                )}
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Proceed
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-400">
            No courses found matching your search criteria.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Learning;
