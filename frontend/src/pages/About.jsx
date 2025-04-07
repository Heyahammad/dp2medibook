import React from "react";
import { assets } from "../assets/assets";
import { FaBolt, FaGlobe, FaBullseye } from "react-icons/fa";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <div className="text-center text-4xl pt-10 text-gray-700">
                <p>
                    ABOUT <span className="text-primary text-700 font-medium">US</span>
                </p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img
                    src={assets.about_image}
                    alt=""
                    className="shadow-lg rounded-lg w-full md:max-w-[360px]"
                />
                <div className="flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600">
                    <p>
                        MediBook is a comprehensive healthcare management platform designed
                        to make healthcare access easier for patients and medical
                        professionals. Whether you're a patient looking for an appointment
                        or a healthcare provider managing appointments, records, and patient
                        care, MediBook is here to simplify the process and improve
                        healthcare efficiency.
                    </p>
                    <p>
                        Our mission is to provide a user-friendly platform that connects
                        patients with trusted healthcare providers while ensuring seamless
                        management of medical appointments, records, and treatments. To
                        empower individuals with accessible healthcare, making it easier to
                        receive treatments, manage appointments, and access important health
                        information in real-time.
                    </p>
                    <b className="text-gray-800">Our Vision</b>
                    <p>
                        Our vision at At MediBook, we aim to bridge the gap between patients
                        and healthcare providers through technology, ensuring a hassle-free
                        experience for everyone involved.
                    </p>
                </div>
            </div>

            <div className="text-center mb-12">
                <p className="text-4xl font-bold text-primary mb-4">
                    WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 pb-6 justify-center items-center">
                <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8 w-full md:w-1/3 text-center hover:bg-primary transition-all duration-300 group">
                    <div className="mb-4">
                        <FaBolt className="text-4xl text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-all duration-300">
                        Efficiency
                    </h3>
                    <p className="text-base text-gray-600 group-hover:text-white transition-all duration-300">
                        Streamlined appointment scheduling that fits into your busy
                        lifestyle.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8 w-full md:w-1/3 text-center hover:bg-primary transition-all duration-300 group">
                    <div className="mb-4">
                        <FaGlobe className="text-4xl text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-all duration-300">
                        Convenience
                    </h3>
                    <p className="text-base text-gray-600 group-hover:text-white transition-all duration-300">
                        Access to a network of trusted healthcare professionals in your
                        area.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8 w-full md:w-1/3 text-center hover:bg-primary transition-all duration-300 group">
                    <div className="mb-4">
                        <FaBullseye className="text-4xl text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-all duration-300">
                        Personalization
                    </h3>
                    <p className="text-base text-gray-600 group-hover:text-white transition-all duration-300">
                        Recommendations and reminders to help you stay on top of your
                        health.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;