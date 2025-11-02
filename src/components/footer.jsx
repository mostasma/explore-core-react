export default function Footer() {
  return (
    <footer
      style={{
        background: "#0b0b0b",
        color: "#e5e7eb",
        padding: "60px 0 30px 0",
        fontFamily: "sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          width: "90%",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        {/* Left Section */}
        <div>
          <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: 14 }}>
            CS — Ticket System
          </h3>
          <p style={{ fontSize: 14, lineHeight: "22px", color: "#9ca3af" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Column 1 */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "28px" }}>
            <li><a href="#" style={linkStyle}>About Us</a></li>
            <li><a href="#" style={linkStyle}>Our Mission</a></li>
            <li><a href="#" style={linkStyle}>Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>Services</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "28px" }}>
            <li><a href="#" style={linkStyle}>Products & Services</a></li>
            <li><a href="#" style={linkStyle}>Customer Stories</a></li>
            <li><a href="#" style={linkStyle}>Embedded Apps</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>Information</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "28px" }}>
            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li><a href="#" style={linkStyle}>Terms & Conditions</a></li>
            <li><a href="#" style={linkStyle}>Join Us</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>Social Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "28px" }}>
            <li><a href="#" style={linkStyle}>🌐 @CS — Ticket System</a></li>
            <li><a href="#" style={linkStyle}>🐦 @CS — Ticket System</a></li>
            <li><a href="#" style={linkStyle}>💬 @CS — Ticket System</a></li>
            <li><a href="mailto:support@cst.com" style={linkStyle}>✉️ support@cst.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          borderTop: "1px solid #1f2937",
          textAlign: "center",
          marginTop: 40,
          paddingTop: 20,
          color: "#9ca3af",
          fontSize: 13,
        }}
      >
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#9ca3af",
  fontSize: 14,
  textDecoration: "none",
  transition: "color 0.3s",
};
