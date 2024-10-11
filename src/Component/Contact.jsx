import React, { useState } from "react";
import { db } from "../../firebaseConfig"; // Ensure your Firebase configuration is set up properly
import { ref, set } from "firebase/database"; // Import ref and set for Realtime Database

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a unique ID for the new entry (optional)
    const id = Date.now(); // You can replace this with a more robust unique ID generation if needed

    try {
      // Add a new document to the Realtime Database
      await set(ref(db, `contacts/${id}`), {
        ...formData,
        createdAt: new Date().toISOString(), // Store the creation date as a string
      });
      setStatus("Message sent successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Error sending message. Please try again.");
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 md:p-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded resize-none h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Done" : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-red-600">{status}</p>}
      </div>
      <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://coursepirate.freewebhostmost.com/image/contactus.jpg" // Replace with your image path
          alt="Contact Us"
          className="h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
