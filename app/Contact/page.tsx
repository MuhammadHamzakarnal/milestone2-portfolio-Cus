import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StyleCss from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <Header></Header>

      <div className={StyleCss.contactContainer}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={StyleCss.contactForm}>
            <h1 className="text-4xl sm:text-5xl">Contact Us</h1>

            <form className="space-y-4">
              <div className="mb-4">
                <label htmlFor="name" className="text-xl sm:text-2xl">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-xl sm:text-2xl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact" className="text-xl sm:text-2xl">
                  Contact
                </label>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Enter your Contact"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-xl sm:text-2xl">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter Your Message"
                  className="w-full mt-2 p-2 rounded border border-gray-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-secendory hover:bg-green-400 text-white p-2 rounded-lg transition duration-600 hover:text-gray-500 active:bg-blue-90 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
