import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">About Us</h1>
            <div className="flex items-center space-x-8">
                <div className="w-1/3">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-2/3">
                    <p className="text-lg text-gray-700">
                        We are a passionate team dedicated to bringing you the best services. Our goal is to help individuals and businesses achieve their goals with quality and efficiency. We believe in building lasting relationships with our clients and always strive for excellence.
                    </p>
                    <p className="mt-4 text-lg text-gray-700">
                        Our team consists of professionals with diverse expertise, working together to provide innovative solutions. Whether you need assistance with web development, digital marketing, or more, we are here to help.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;