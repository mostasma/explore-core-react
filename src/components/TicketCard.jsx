import React, { useState } from "react";

export default function TicketCard({ ticket, onClick }) {
  const [clicked, setClicked] = useState(false);

  // Determine the tag badge class
  const tagClass =
    ticket.tag === "open"
      ? "badge open"
      : ticket.tag === "inprogress"
      ? "badge inprogress"
      : "badge";

  // Determine priority color
  const priorityColor = clicked ? "orange" : "red";

  const handleClick = () => {
    setClicked(true); // change priority color to orange
    if (onClick) onClick();
  };

  return (
    <article
      className="ticket-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{
        position: "relative",
        padding: 16,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        background: "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 180, // adjust as needed
      }}
    >
      {/* Top-right tag badge */}
      <div style={{ position: "absolute", top: 16, right: 16 }}>
        <span className={tagClass} style={{ fontSize: 12 }}>
          {ticket.tag === "open"
            ? "Open"
            : ticket.tag === "inprogress"
            ? "In-Progress"
            : "Resolved"}
        </span>
      </div>

      {/* Title and description */}
      <div>
        <h3 style={{ margin: "8px 0" }}>{ticket.title}</h3>
        <p style={{ margin: "4px 0 12px" }}>{ticket.description}</p>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "#6b7280",
          marginTop: 16,
        }}
      >
        {/* ID + priority on bottom-left */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span>#{ticket.id}</span>
          <span style={{ color: priorityColor, fontWeight: "bold" }}>
            {ticket.priority}
          </span>
        </div>

        {/* Customer + date on bottom-right */}
        <div style={{ display: "flex", gap: 16 }}>
          <div>{ticket.customer}</div>
          <div>{ticket.createdAt}</div>
        </div>
      </div>
    </article>
  );
}
