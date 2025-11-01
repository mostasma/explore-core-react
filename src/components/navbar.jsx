import React from "react";

export default function Navbar() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e6e6e6" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap:12 }}>
          <div style={{ fontWeight:700, color:"#0b1220" }}>CS — Ticket System</div>
        </div>

        <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <a href="#" style={{ fontSize:14, color:"#374151" }}>Home</a>
          <a href="#" style={{ fontSize:14, color:"#374151" }}>FAQ</a>
          <a href="#" style={{ fontSize:14, color:"#374151" }}>Changelog</a>
          <a href="#" style={{ fontSize:14, color:"#374151" }}>Blog</a>
          <button style={{ background:"#7c3aed", color:"#fff", padding:"8px 12px", borderRadius:8, border:"none", cursor:"pointer" }}>+ New Ticket</button>
        </nav>
      </div>
    </header>
  );
}
