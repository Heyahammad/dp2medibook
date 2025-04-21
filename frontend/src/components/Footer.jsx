import React from "react";
import { assets } from "../assets/assets";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import {
    FaXTwitter,
    FaWhatsapp,
} from "react-icons/fa6"


const Footer = () => {
    return (
        <div className="bg-primary2 text-offwhite py-12 border-t border-gray-200">
            <div className="container mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div className="flex flex-col items-center sm:items-start sm:w-100">
                    <img
                        className="mb-5 w-40"
                        src={assets.logowhite}
                        alt="MediBook Logo"
                    />
                    <p className="text-offwhite text-center sm:text-left">
                        At MediBook, we make healthcare easier for everyone. Our platform
                        helps you find trusted doctors, book appointments quickly, and
                        manage your health records all in one place. Whether you need a
                        check-up or expert care, MediBook is here to support your health
                        journey every step of the way.
                    </p>
                </div>

                {/* Company Links */}
                <div className="text-center sm:text-left sm:ml-30">
                    <p className="text-xl font-semibold mb-5 text-offwhite">COMPANY</p>
                    <ul className="flex flex-col gap-3 text-offwhite">
                        <li className="hover:text-primary cursor-pointer transition duration-300">
                            Home
                        </li>
                        <li className="hover:text-red cursor-pointer transition duration-300">
                            About Us
                        </li>
                        <li className="hover:text-primary cursor-pointer transition duration-300">
                            Feedback
                        </li>
                        <li className="hover:text-primary cursor-pointer transition duration-300">
                            Privacy Policy
                        </li>
                    </ul>
                </div>

                {/* Get In Touch & Email Subscription */}
                <div className="text-center sm:text-left sm:ml-10">
                    <p className="text-xl font-semibold mb-5 text-offwhite">
                        GET IN TOUCH
                    </p>
                    <ul className="flex flex-col gap-3 text-offwhite">
                        <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition duration-300">
                            <FaPhoneAlt /> +8801571299965
                        </li>
                        <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition duration-300">
                            <FaEnvelope /> heyahammad@gmail.com
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex justify-center sm:justify-start gap-6 mt-5">
                        <a
                            href=""
                            className="text-offwhite hover:text-facebook transition duration-300"
                        >
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a
                            href="#"
                            className="text-offwhite hover:text-[#5CB338] transition duration-300"
                        >
                            <FaWhatsapp className="text-2xl" />
                        </a>
                        <a
                            href="#"
                            className="text-offwhite hover:text-[#000000] transition duration-300"
                        >
                            <FaXTwitter className="text-2xl" />
                        </a>
                        <a
                            href="#"
                            className="text-offwhite hover:text-instagram transition duration-300"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div>
                    <p className="mb-3 text-lg font-semibold text-offwhite">
                        NEWSLETTER.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 w-39 sm:w-37 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red shadow-md"
                        />
                        <button
                            type="button"
                            className="bg-red text-white px-6 py-3  font-medium shadow-md hover:opacity-90 transition duration-300"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-12 border-t border-offwhite pt-6">
                <p className="text-center text-sm text-offwhite">
                    Copyright 2025 @heyahammad - All Rights Reserved.
                </p>

            </div>
        </div>
    );
};

export default Footer;
