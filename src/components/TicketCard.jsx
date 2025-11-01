import React from "react";

function TicketCard({ ticket, onClick }) {
  return (
    <div className="ticket-card" onClick={onClick}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p><strong>Customer:</strong> {ticket.customer}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><small>Created: {ticket.createdAt}</small></p>
    </div>
  );
}

export default TicketCard;
