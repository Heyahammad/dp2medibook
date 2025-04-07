import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Filter from "../components/Filter";

const Doctors = () => {
    const { doctors } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const allDoctors = location.state?.filteredDoctors || doctors;
    const filters = location.state?.filters || { type: "", area: "", fee: "" };

    const [visibleDoctorsCount, setVisibleDoctorsCount] = useState(6);

    const visibleDoctors = allDoctors.slice(0, visibleDoctorsCount);

    const handleLoadMore = () => {
        setVisibleDoctorsCount((prevCount) => prevCount + 6);
    };

    return (
        <>
            <Filter initialFilters={filters} />
            <div className="min-h-screen py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {visibleDoctors.map((doctor) => (
                        <div
                            key={doctor._id}
                            className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 p-6 flex flex-col items-center"
                        >
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 border-4 border-primary"
                            />
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                                {doctor.name}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">
                                <strong>Speciality:</strong> {doctor.speciality}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                <strong>Degree:</strong> {doctor.degree}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                <strong>Experience:</strong> {doctor.experience}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                <strong>Fees:</strong> Tk{doctor.fees}
                            </p>
                            <div className="text-center mt-4">
                                <p className="text-gray-600 text-sm">
                                    <strong>Address:</strong>
                                </p>
                                <p className="text-gray-600 text-sm">{doctor.address.line1}</p>
                                <p className="text-gray-600 text-sm">{doctor.address.line2}</p>
                            </div>
                            <button
                                onClick={() => {
                                    navigate(`/appointments/${doctor._id}`);
                                    scrollTo(0, 0);
                                }}
                                className="mt-4 bg-primary text-white px-8 py-2 text-sm rounded-full shadow-md hover:bg-primary-dark focus:outline-none transition duration-300"
                            >
                                Book
                            </button>
                        </div>
                    ))}
                </div>

                {visibleDoctorsCount < allDoctors.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-primary text-white px-6 py-3 text-sm font-medium rounded-full shadow-md hover:bg-primary-dark focus:outline-none transition duration-300"
                        >
                            More
                        </button>
                    </div>
                )}

                {visibleDoctorsCount >= allDoctors.length && (
                    <p className="text-center text-gray-500 text-sm mt-8">
                        No more doctors to show.
                    </p>
                )}
            </div>
        </>
    );
};

export default Doctors;
