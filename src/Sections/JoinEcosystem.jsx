import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Business Owners",
    text: "Manage operations, accept payments, track sales, and connect to logistics and suppliers.",
    action: "Start Business Account",
  },
  {
    title: "Logistics Partners",
    text: "Receive delivery requests, manage dispatch, and earn from every completed order in your area.",
    action: "Join as Logistics Partner",
  },
  {
    title: "Customers",
    text: "Book services, order products, and discover trusted businesses across your city.",
    action: "Create Customer Account",
  },
];

const JoinEcosystem = () => {
  return (
    <section
      style={{
        position: "relative",
        background: "#0A0A0A",
        padding: "9rem 1.5rem",
        overflow: "hidden",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "999px",
          background: "rgba(124,58,237,0.15)",
          filter: "blur(140px)",
          top: "-20%",
          right: "-10%",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              padding: "0.7rem 1rem",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            Join the Ecosystem
          </span>

          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 5.8rem)",
              letterSpacing: "-4px",
              color: "white",
              lineHeight: "0.95",
              fontWeight: 650,
              maxWidth: "900px",
              margin: "0 auto 1.5rem",
            }}
          >
            One Platform.
            <br />
            Three Ways In.
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Bizula connects businesses, logistics providers, and customers into one
            unified commerce ecosystem. Choose your role and get started instantly.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="join-grid"
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "2.2rem",
                borderRadius: "32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {role.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                {role.text}
              </p>

              <Link to="/register"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "16px",
                  border: "none",
                  cursor: "pointer",
                  background: "#7C3AED",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {role.action}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 980px) {
            .join-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default JoinEcosystem;