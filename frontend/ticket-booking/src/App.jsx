import { useState } from 'react';
import Header from './components/Header';
import Ticket from './components/ticket/Ticket';
import Events from './components/Events';  // Example new component
import Projects from './components/Projects';  // Another example component
import Profile from './components/Profile';

function App() {
  const tickets = [
      { id: 1, price: "Free", type: "REGULAR", available: "20/52" },
      { id: 2, price: "$150", type: "VIP ACCESS", available: "10/30" },
      { id: 3, price: "$250", type: "VVIP ACCESS", available: "5/10" },
    ];
  const [selectedPage, setSelectedPage] = useState('events');
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
  const [submittedTickets, setSubmittedTickets] = useState([]); // Track submitted tickets

  const handleSubmit = (fullName, email, avatar, ticket, count) => {
    setSubmittedTickets([...submittedTickets, { 
      fullName,
      email,
      avatar,
      ticketType: ticket?.type,
      ticketPrice: ticket?.price,
      ticketCount: count
    }]);
  };

  

  return (
    <div className='px-2 lg:px-0 py-6 h-[100%] w-full m-auto max-w-[1280px]'>
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      
      {/* Conditionally Render Components */}
      {selectedPage === "events" && 
      <Ticket selectedPage={selectedPage} setSelectedPage={setSelectedPage} tickets={tickets} selectedTicket={selectedTicket} handleSubmit={handleSubmit} setSelectedTicket={setSelectedTicket} />
      }
      {selectedPage === "tickets" && <Events submittedTickets={submittedTickets} />}

      {selectedPage === "profile" && <Profile/>}


      {selectedPage === "projects" && <Projects />}
    </div>
  );
}

export default App;
