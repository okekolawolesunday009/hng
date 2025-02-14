import React from "react";

const Events = ({ submittedTickets }) => {
  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
        🎟 Your Submitted Tickets
      </h1>

      {submittedTickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {submittedTickets.map((entry, index) => (
            <div
              key={index}
              className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg border-4 border-yellow-500"
            >
              {/* Ticket Header */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm">
                {entry.ticket.type}
              </div>

              {/* Ticket Content */}
              <div className="text-center">
                <h2 className="text-xl font-semibold">{entry.ticket.price}</h2>
                <p className="text-gray-400 text-sm mt-2">
                  Available: {entry.ticket.available}
                </p>
                <p className="text-yellow-300 text-lg mt-4">
                  Quantity: {entry.count}
                </p>
              </div>

              {/* Ticket Barcode */}
              <div className="mt-6 flex justify-center">
                <div className="h-10 w-full bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-400 tracking-widest">
                    #Events-{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
