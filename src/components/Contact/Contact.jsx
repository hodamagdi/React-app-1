import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Star } from "../Star/Star";

export default function Contact({ navbarHeight }) {

  const [formValues, setFormValues] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div style={{ paddingTop: navbarHeight }}>
      {/* change page title  */}
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Star text="Contact section" color="#2C3E50" />

      <div className="my-20 px-4 md:px-8 ">
        {/* form  */}
        <form className="max-w-2xl mx-auto">
          <div className="relative w-full my-12 group">
            <input
              onChange={handleInputChange}
              type="text"
              name="userName"
              id="userName"
              className="block px-0 w-full text-lg bg-transparent border-b-2 focus:outline-none peer"
              placeholder="user Name "
              required
            />
            <label
              htmlFor="userName"
              className={`absolute left-0 transition-all duration-500 ease-in-out ${
                formValues.userName ? '-top-7 opacity-100 visible text-[#1ABC9C]' : '-top-4 opacity-0 invisible'
              } font-medium`}
            >
              User name
            </label>
          </div>
          <div className="relative w-full my-12 group">
            <input
              onChange={handleInputChange}
              type="number"
              name="userAge"
              id="userAge"
              className="block px-0 w-full text-lg bg-transparent border-b-2 focus:outline-none peer"
              placeholder="user Age "
              required
            />
            <label
              htmlFor="userAge"
              className={`absolute left-0 transition-all duration-500 ease-in-out ${
                formValues.userAge ? '-top-7 opacity-100 visible text-[#1ABC9C]' : '-top-4 opacity-0 invisible'
              } font-medium`}
            >
              User Age
            </label>
          </div>
          <div className="relative w-full my-12 group">
            <input
              onChange={handleInputChange}
              type="Email"
              name="userEmail"
              id="userEmail"
              className="block px-0 w-full text-lg bg-transparent border-b-2 focus:outline-none peer"
              placeholder="User Email "
              required
            />
            <label
              htmlFor="userEmail"
              className={`absolute left-0 transition-all duration-500 ease-in-out ${
                formValues.userEmail ? '-top-7 opacity-100 visible text-[#1ABC9C]' : '-top-4 opacity-0 invisible'
              } font-medium`}
            >
              User Email
            </label>
          </div>
          <div className="relative w-full my-12 group">
            <input
              onChange={handleInputChange}
              type="password"
              name="userPassword"
              id="userPassword"
              className="block px-0 w-full text-lg bg-transparent border-b-2 focus:outline-none peer"
              placeholder=" User password "
              required
            />
            <label
              htmlFor="userPassword"
              className={`absolute left-0 transition-all duration-500 ease-in-out ${
                formValues.userPassword ? '-top-7 opacity-100 visible text-[#1ABC9C]' : '-top-4 opacity-0 invisible'
              } font-medium`}
            >
              User password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-[#1ABC9C] hover:bg-[#179e8d] focus:ring-4 focus:outline-none focus:ring-[#1ABC9C] font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-2"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
}

