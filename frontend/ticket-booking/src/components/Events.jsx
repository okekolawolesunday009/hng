import React from "react";

const Events = ({ submittedTickets }) => {
  console.log(submittedTickets);

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
        🎟 Your Submitted Tickets
      </h1>

      {submittedTickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {submittedTickets.map((entry, index) => {
            const { fullName, email, avatar, ticketType, ticketPrice, ticketCount } = entry;

            // Define colors based on ticket type
            const ticketColors = {
              REGULAR: "border-blue-500 bg-blue-800",
              "VIP ACCESS": "border-purple-500 bg-purple-800",
              "VVIP ACCESS": "border-red-500 bg-red-800",
            };

            const barcodeColors = {
              REGULAR: "bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700",
              "VIP ACCESS": "bg-gradient-to-r from-purple-700 via-purple-900 to-purple-700",
              "VVIP ACCESS": "bg-gradient-to-r from-red-700 via-red-900 to-red-700",
            };

            return (
              <div
                key={index}
                className={`relative text-white p-6 rounded-lg shadow-lg border-4 ${ticketColors[ticketType] || "border-gray-500 bg-gray-800"}`}
              >
                {/* Ticket Header */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm">
                  {ticketType}
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={avatar || "https://via.placeholder.com/50"}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{fullName || "Anonymous"}</h2>
                    <p className="text-gray-300 text-sm">{email || "No email provided"}</p>
                  </div>
                </div>

                {/* Ticket Content */}
                <div className="text-center">
                  <h2 className="text-xl font-semibold">${ticketPrice}</h2>
                  <p className="text-yellow-300 text-lg mt-4">
                    Quantity: {ticketCount}
                  </p>
                </div>

                {/* Ticket Barcode */}
                <div className="mt-6 flex justify-center">
                  <div className={`h-10 w-full ${barcodeColors[ticketType] || "bg-gray-700"} rounded-md flex items-center justify-center`}>
                    <span className="text-xs text-gray-400 tracking-widest">
                      #Events-{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Events;
