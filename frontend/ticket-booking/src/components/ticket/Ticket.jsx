import React, { useState } from "react";

const Ticket = ({ selectedPage,ticketCount, setTicketCount, setSelectedPage, selectedTicket, setSelectedTicket, tickets, handleSubmit }) => {
 
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedTicket) {
      setErrors({ ticket: "Please select a ticket type." });
      return;
    }
    console.log(selectedTicket, ticketCount)
    setSelectedPage("profile");
  };

  return (
    <div className="relative block p-6 text-primaryFont mt-8 w-full max-w-2xl mx-auto rounded-2xl border-2 border-primaryColor2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ticket Session</h1>
        <p className="text-gray-500">1/3</p>
      </div>

      {/* Event Details */}
      <div className="p-4 mt-4 flex flex-col w-full rounded-2xl border-2 border-primaryColor2 text-center">
        <h1 className="text-3xl font-semibold">Techember Fest ’25</h1>
        <p className="w-[80%] mx-auto mt-2">Join us for an unforgettable experience! Secure your spot now.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-2 gap-2 text-sm">
          <p>📍 [Event Location]</p>
          <span className="hidden sm:inline">|</span>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>

      {/* Ticket Selection */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Ticket Type Selection */}
        <div className="p-4 w-full rounded-2xl border-2 border-primaryColor2">
          <p className="font-medium text-lg mb-2">Select Ticket Type</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tickets.map((ticket) => (
              <li
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className={`p-3 border-2 rounded-lg cursor-pointer ${
                  selectedTicket?.id === ticket.id
                    ? "bg-primaryColor2 text-white border-white"
                    : "border-primaryColor2 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <h1 className="font-extrabold text-xl">${ticket.price}</h1>
                <p className="font-semibold">{ticket.type}</p>
                <p className="text-sm">{ticket.available} available</p>
              </li>
            ))}
          </ul>
          {errors.ticket && <p className="text-red-500 mt-2">{errors.ticket}</p>}
        </div>

        {/* Ticket Quantity */}
        {selectedTicket && (
          <div className="p-4 w-full rounded-2xl border-2 border-primaryColor2">
            <label htmlFor="ticket-number" className="block font-medium mb-2">Number of Tickets</label>
            <select
              id="ticket-number"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              className="w-full p-2 border-2 rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button
            type="button"
            onClick={() => setSelectedTicket(null)}
            className="px-6 border-2 border-primaryColor2 w-full sm:w-[48%] py-2 text-white rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="button"
            className={`px-6 w-full sm:w-[48%] border-2 border-primaryColor2 py-2 text-white rounded-md ${
              selectedTicket ? "bg-primaryColor2 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ticket;