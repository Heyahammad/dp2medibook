import { useState } from 'react';
import { FiSend, FiUser, FiCalendar, FiMessageSquare, FiThumbsUp, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Color variables
    const primaryColor = '#68BBE3';
    const primaryHover = '#5CA8D0';
    const primaryLight = '#E1F2FA';
    const primaryDark = '#3A8DBD';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rating || !comment) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log({ rating, comment });
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="pb-10 pt-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiThumbsUp className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                    <p className="text-gray-600 mb-6">Your feedback helps us improve our service.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        style={{ backgroundColor: primaryColor }}
                        className="px-6 py-3 text-white rounded-full hover:bg-[#5CA8D0] transition flex items-center mx-auto"
                    >
                        <FiSend className="mr-2" />
                        Submit New Feedback
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pb-10 pt-5">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg"
            >
                <div className="flex items-center mb-6 pb-10">
                    <div style={{ backgroundColor: primaryLight }} className="p-3 rounded-lg mr-4">
                        <FiMessageSquare style={{ color: primaryColor }} className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Share Your Feedback</h2>
                        <p className="text-gray-500">How was your experience?</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                            <FiStar className="mr-2 text-yellow-400" />
                            Rate your experience
                        </label>
                        <div className="flex justify-center space-x-2 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="relative"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <FiStar className={`w-8 h-8 transition-all duration-200 ${star <= (hoverRating || rating)
                                            ? 'fill-yellow-400 text-yellow-400 scale-110'
                                            : 'text-gray-300'
                                            }`} />
                                    </div>
                                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500">
                                        {star}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-4 pt-5">
                            <span className="text-sm font-medium text-gray-500">
                                {rating === 0 ? 'Select a rating' : (
                                    <span style={{ color: primaryColor }}>
                                        {rating} star{rating > 1 ? 's' : ''} - {
                                            ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating - 1]
                                        }
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                            <FiUser className="mr-2" style={{ color: primaryColor }} />
                            Your comments
                        </label>
                        <div className="relative">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows="4"
                                style={{
                                    borderColor: '#E5E7EB',
                                    focusBorderColor: primaryColor,
                                    focusRingColor: primaryColor
                                }}
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-primary transition resize-none"
                                placeholder="Tell us about your experience..."
                                required
                            />
                            <div className="absolute bottom-3 right-3 text-gray-400 text-xs">
                                {comment.length}/500
                            </div>
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={!rating || !comment || isSubmitting}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            backgroundColor: (!rating || !comment) ? '#D1D5DB' : primaryColor,
                            '&:hover': {
                                backgroundColor: primaryHover
                            }
                        }}
                        className="w-full py-3 px-6 rounded-xl flex items-center justify-center space-x-2 text-white shadow-md transition"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <>
                                <FiSend className="w-5 h-5" />
                                <span>Submit Feedback</span>
                            </>
                        )}
                    </motion.button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                        <div style={{ backgroundColor: primaryLight }} className="p-2 rounded-lg mr-3">
                            <FiCalendar style={{ color: primaryColor }} className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">We review all feedback daily</p>
                            <p className="text-xs text-gray-400">Your opinion matters to us</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Feedback;