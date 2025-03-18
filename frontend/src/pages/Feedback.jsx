import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        console.log("Feedback submitted:", { name, email, phone, rating, feedback });
        alert("Thank you for your feedback!");

        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setRating(0);
        setFeedback("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white p-6 rounded-2xl rounded-primary border-2 border-primary shadow-xl max-w-xl w-full text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Give Your Feedback</h2>

                {/* Name Input */}
                <input
                    type="text"
                    className="w-full p-3 border-2 border-gray-300 rounded-full mb-3 hover:border-primary focus:border-primary outline-none"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="w-full p-3 border-2 border-gray-300 rounded-full mb-3 hover:border-primary focus:border-primary outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="tel"
                    className="w-full p-3 border-2 border-gray-300 rounded-full mb-3 hover:border-primary focus:border-primary outline-none"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                {/* Feedback Text Input */}
                <textarea
                    className="w-full p-3 border-2 border-gray-300 rounded-lg mb-3 hover:border-primary focus:border-primary outline-none"
                    rows="4"
                    placeholder="Write your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <StarIcon
                            key={index}
                            className={`h-10 w-10 cursor-pointer transition-colors ${(hover || rating) >= index ? "text-primary" : "text-gray-300"
                                }`}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(index)}
                        />
                    ))}
                </div>

                {/* Submit Button */}
                <button
                    className={`mt-4 w-full py-2 rounded-lg text-white transition-all ${!name || !email || !phone || !rating || !feedback.trim()
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary2"
                        }`}
                    onClick={handleSubmit}
                    disabled={!name || !email || !phone || !rating || !feedback.trim()}
                >
                    Submit Feedback
                </button>
            </div>
        </div>
    );
};

export default Feedback;
