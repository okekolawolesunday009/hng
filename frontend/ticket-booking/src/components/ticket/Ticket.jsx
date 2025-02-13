import React, { useState } from "react";

const Ticket = () => {
  const tickets = [
    { id: 1, price: "Free", type: "REGULAR", available: "20/52" },
    { id: 2, price: "$150", type: "VIP ACCESS", available: "10/30" },
    { id: 3, price: "$250", type: "VVIP ACCESS", available: "5/10" },
  ];

  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="block p-6 text-primaryFont mt-8 w-full max-w-2xl mx-auto rounded-2xl border-2 border-primaryColor2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ticket Session</h1>
        <p className="text-gray-500">1/3</p>
      </div>

      {/* Event Details */}
      <div className="p-4 mt-4 flex flex-col w-full rounded-2xl border-2 border-primaryColor2 text-center">
        <h1 className="text-3xl font-semibold">Techember Fest ’25</h1>
        <p className="w-[80%] mx-auto mt-2">
          Join us for an unforgettable experience! Secure your spot now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-2 gap-2 text-sm">
          <p>📍 [Event Location]</p>
          <span className="hidden sm:inline">|</span>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>

      {/* Ticket Selection */}
      <div className="p-4 w-full rounded-2xl border-2 border-primaryColor2 mt-4">
        <p className="font-medium text-lg mb-2">Select Ticket Type</p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tickets.map((ticket) => (
            <li
              key={ticket.id}
              onClick={() => handleTicketSelect(ticket)}
              className={`p-3 border-2 rounded-lg cursor-pointer ${
                selectedTicket?.id === ticket.id
                  ? "bg-primaryColor2 text-white border-white"
                  : "border-primaryColor2 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <h1 className="font-extrabold text-xl">{ticket.price}</h1>
              <p className="font-semibold">{ticket.type}</p>
              <p className="text-sm">{ticket.available} available</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Ticket Quantity Selection */}
      {selectedTicket && (
        <div className="p-4 w-full rounded-2xl border-2 border-primaryColor2 mt-4">
          <label htmlFor="ticket-number" className="block font-medium mb-2">
            Number of Tickets
          </label>
          <select
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            className="w-full p-2 bg-transparent border-2 border-primaryColor2 rounded-lg text-white focus:ring-2 focus:ring-primaryColor"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
        <button className="px-6 border-2 border-primaryColor2 w-full sm:w-[48%] py-2 text-white rounded-md hover:bg-red-600">
          Cancel
        </button>
        <button
          className={`px-6 w-full sm:w-[48%] border-2 border-primaryColor2 py-2 text-white rounded-md ${
            selectedTicket
              ? "bg-primaryColor2 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          disabled={!selectedTicket}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Ticket;
