import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="text-center text-3xl pt-10 text-gray-700">
        <p>
          CONTACT <span className="font-semibold text-primary">US</span>
        </p>
      </div>

      <div className="my-20 flex flex-col gap-10 md:flex-row items-center justify-center">

        <div className="w-full md:max-w-lg lg:max-w-md shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>


        <div className="flex flex-col justify-start items-start gap-6 px-4 md:px-10 text-lg">
          <p className="font-semibold text-2xl text-gray-700">OUR OFFICE</p>
          <p className="text-gray-600 text-lg">
            Dhanmondi <br /> 15, Dhaka, Bangladesh
          </p>
          <p className="text-gray-600 text-lg">
            Phone: +880123456789 <br /> Email: heyahammad@gmail.com
          </p>

          <p className="font-semibold text-2xl text-gray-700">
            CAREERS AT MEDIBOOK
          </p>
          <p className="text-gray-600 text-lg">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-primary text-primary px-8 py-4 text-lg font-medium rounded-md hover:bg-primary hover:text-white transition-all duration-300 mt-4">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;