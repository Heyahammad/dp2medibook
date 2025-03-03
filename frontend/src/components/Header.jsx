import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { FaClinicMedical } from "react-icons/fa";

function Header() {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollBy(0, 715); 
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-[10vw]">
        <p className="text-3xl md:text-5xl lg:text-6xl text-white md-8 font-semibold leading-tight text-center md:text-left">
          Simplifying Care, <br className="hidden sm:block" />
          One Click at a Time.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-md font-light text-center md:text-left">
          <FaClinicMedical className="text-4xl" />
          <p>
            Discover a wide range of trusted doctors, view their profiles,{" "}
            <br className="hidden sm:block" />
            and schedule your appointments—all in one seamless experience.
          </p>
        </div>
        <a onClick={(e) => {
          e.preventDefault();
          scrollToSection();
        }}
          className="flex items-center gap-2 bg-white px-6 py-2 md:px-8 md:py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
          href=""
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      <div className="md:w-1/2 relative mt-6 md:mt-0">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.homedoctor2}
          alt="Header Illustration"
        />
      </div>
    </div>
  );
}

export default Header;
