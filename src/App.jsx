import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ResolvedList from "./components/ResolvedList";
import Footer from "./components/Footer";
import ticketsData from "./data/ticketsData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Add card to in-progress (and remove from tickets list)
  const handleAddToProgress = (ticket) => {
    if (inProgress.some(t => t.id === ticket.id)) {
      toast.info(`"${ticket.title}" already in progress`);
      return;
    }
    setInProgress(prev => [ticket, ...prev]);
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    toast.info(`"${ticket.title}" added to In Progress`);
  };

  // Complete a task: remove from inProgress -> add to resolved
  const handleComplete = (ticketId) => {
    const found = inProgress.find(t => t.id === ticketId);
    if (!found) return;
    setInProgress(prev => prev.filter(t => t.id !== ticketId));
    setResolved(prev => [found, ...prev]);
    toast.success(`"${found.title}" marked as Resolved`);
  };

  // Optionally restore a resolved ticket back to tickets (not required but handy)
  const handleRestore = (ticketId) => {
    const found = resolved.find(t => t.id === ticketId);
    if (!found) return;
    setResolved(prev => prev.filter(t => t.id !== ticketId));
    setTickets(prev => [found, ...prev]);
    toast.info(`"${found.title}" restored to Tickets`);
  };

  return (
    <div className="app-root">
      <Navbar />
      <div className="container">
        <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

        <div className="content-grid">
          {/* Left: tickets grid */}
          <section className="tickets-column" aria-label="Customer Tickets">
            <h2 className="section-title">Customer Tickets</h2>
            <div className="tickets-grid">
              {tickets.length === 0 && <div className="empty-msg">No open tickets</div>}
              {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} onClick={() => handleAddToProgress(ticket)} />
              ))}
            </div>
          </section>

          {/* Right: task & resolved */}
          <aside className="side-column" aria-label="Task Status and Resolved">
            <TaskStatus tasks={inProgress} onComplete={handleComplete} />
            <ResolvedList resolved={resolved} onRestore={handleRestore} />
          </aside>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default App;
