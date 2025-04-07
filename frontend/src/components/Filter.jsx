import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Filter({ initialFilters = {} }) {
    const { doctors } = useContext(AppContext);
    const [type, setType] = useState(initialFilters.type || "");
    const [area, setArea] = useState(initialFilters.area || "");
    const [fee, setFee] = useState(initialFilters.fee || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (initialFilters.type) setType(initialFilters.type);
        if (initialFilters.area) setArea(initialFilters.area);
        if (initialFilters.fee) setFee(initialFilters.fee);
    }, [initialFilters]);

    const handleSearch = () => {
        const filteredDoctors = doctors.filter((doctor) => {
            const matchesType = type === "" || doctor.speciality === type;
            const matchesArea = area === "" || doctor.address.line2.includes(area);
            const matchesFee = fee === "" || doctor.fees <= parseInt(fee, 10);

            return matchesType && matchesArea && matchesFee;
        });

        navigate("/doctors", {
            state: {
                filteredDoctors,
                filters: { type, area, fee },
            },
        });
    };

    const uniqueTypes = [...new Set(doctors.map((doc) => doc.speciality))];
    const uniqueAreas = [...new Set(doctors.map((doc) => doc.address.line2))];

    return (
        <div className="p-8 bg-white items-center gap-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary font-semibold leading-tight text-center mb-8">
                Find Your Doctor
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Dicover the ideal doctor who matches your preferences.
            </p>

            <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-8">
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full md:w-1/5 p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
                >
                    <option value="">Select Speciality</option>
                    {uniqueTypes.map((docType) => (
                        <option key={docType} value={docType}>
                            {docType}
                        </option>
                    ))}
                </select>

                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full md:w-1/5 p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
                >
                    <option value="">Select Area</option>
                    {uniqueAreas.map((docArea) => (
                        <option key={docArea} value={docArea}>
                            {docArea}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Max Fee"
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    className="w-full md:w-1/5 p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
                />
                <button
                    onClick={handleSearch}
                    className="bg-primary text-white w-full md:w-1/5 p-2 border rounded-full shadow hover:bg-primary-dark focus:outline-none"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Filter;
