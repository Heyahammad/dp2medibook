import { useState } from 'react';

const SSLCommerz = () => {
    const [activeTab, setActiveTab] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        alert(activeTab === 'card' ? 'Card payment processing...' : 'Mobile payment processing...');
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-600 py-4 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-white p-2 rounded-md mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h1 className="text-white text-xl font-bold">SSLCommerz</h1>
                        </div>
                        <span className="text-white text-sm">Secure Payment</span>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-gray-800">৳1,200.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600">-৳200.00</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                        <span className="text-gray-800">Total</span>
                        <span className="text-blue-600">৳1,060.00</span>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h2>

                    {/* Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            className={`py-2 px-4 font-medium ${activeTab === 'card' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('card')}
                        >
                            Credit/Debit Card
                        </button>
                        <button
                            className={`py-2 px-4 font-medium ${activeTab === 'mobile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('mobile')}
                        >
                            Mobile Banking
                        </button>
                    </div>

                    {/* Card Payment Form */}
                    {activeTab === 'card' && (
                        <form onSubmit={handlePayment}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="card-number">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="card-number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="expiry">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiry"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="MM/YY"
                                        value={cardExpiry}
                                        onChange={(e) => setCardExpiry(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cvv">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="123"
                                        value={cardCvv}
                                        onChange={(e) => setCardCvv(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="save-card"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
                                    Save this card for future payments
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
                            >
                                Pay ৳1,060.00
                            </button>
                        </form>
                    )}

                    {/* Mobile Payment Form */}
                    {activeTab === 'mobile' && (
                        <form onSubmit={handlePayment}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        +880
                                    </span>
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="1XXXXXXXXXX"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                                    OTP
                                </label>
                                <input
                                    type="text"
                                    id="otp"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <button
                                    type="button"
                                    className="text-blue-600 text-sm font-medium hover:text-blue-800"
                                >
                                    Resend OTP
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
                            >
                                Pay ৳1,060.00
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 text-center">
                    <p className="text-gray-500 text-xs">
                        © 2025 Faisal. All rights reserved. Payments are secure and encrypted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SSLCommerz;