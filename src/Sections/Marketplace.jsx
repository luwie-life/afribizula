import { motion } from "framer-motion";

const ecosystem = [
  {
    title: "Service Businesses",

    text:
      "Accept bookings, manage staff, receive commitment payments, and connect with suppliers and logistics providers.",
  },

  {
    title: "Retail Businesses",

    text:
      "Track inventory, manage orders, sell products, and supply businesses across the ecosystem.",
  },

  {
    title: "Enterprise Suppliers",

    text:
      "Distribute products in bulk, manage retailer relationships, and power large-scale commerce.",
  },

  {
    title: "Logistics Providers",

    text:
      "Receive delivery requests, manage locations, and fulfill orders across nearby regions.",
  },

  {
    title: "Customers",

    text:
      "Book services, order products, discover businesses, and access modern commerce experiences.",
  },
];

const Marketplace = () => {
  return (
    <section
      id="marketplace"
      style={{
        position: "relative",

        background: "#FFFFFF",

        padding:
          "9rem 1.5rem",

        overflow: "hidden",
      }}
    >

      {/* BACKGROUND */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(to bottom, rgba(124,58,237,0.03), transparent)",
        }}
      />

      {/* GRID LIGHT */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          opacity: 0.04,

          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)",

          backgroundSize:
            "80px 80px",
        }}
      />

      {/* CONTAINER */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: "1280px",

          margin: "0 auto",
        }}
      >

        {/* TOP */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          style={{
            textAlign: "center",

            marginBottom: "7rem",
          }}
        >

          <span
            style={{
              display: "inline-flex",

              padding:
                "0.7rem 1rem",

              borderRadius:
                "999px",

              background:
                "rgba(124,58,237,0.08)",

              color: "#7C3AED",

              fontSize: "0.92rem",

              fontWeight: 500,

              marginBottom:
                "1.5rem",
            }}
          >
            Marketplace Ecosystem
          </span>

          <h2
            style={{
              fontSize:
                "clamp(3rem, 6vw, 6rem)",

              lineHeight: "0.92",

              letterSpacing:
                "-5px",

              color: "#0A0A0A",

              fontWeight: 650,

              maxWidth: "980px",

              margin:
                "0 auto 2rem",
            }}
          >
            A Connected
            Commerce Network
            For African
            Businesses
          </h2>

          <p
            style={{
              fontSize: "1.08rem",

              lineHeight: "1.9",

              color:
                "rgba(0,0,0,0.64)",

              maxWidth: "760px",

              margin: "0 auto",
            }}
          >
            Bizula connects
            businesses, suppliers,
            logistics providers,
            and customers into one
            intelligent ecosystem
            designed to simplify
            commerce and business
            growth across Africa.
          </p>

        </motion.div>

        {/* ECOSYSTEM FLOW */}

        <div
          style={{
            position: "relative",

            display: "flex",

            flexDirection: "column",

            gap: "2rem",

            maxWidth: "980px",

            margin: "0 auto",
          }}
        >

          {ecosystem.map(
            (item, index) => (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay:
                    index * 0.08,
                }}

                viewport={{
                  once: true,
                }}

                style={{
                  position:
                    "relative",

                  display: "grid",

                  gridTemplateColumns:
                    "120px 1fr",

                  gap: "2rem",

                  alignItems:
                    "start",

                  padding:
                    "2rem",

                  borderRadius:
                    "32px",

                  background:
                    "rgba(255,255,255,0.78)",

                  border:
                    "1px solid rgba(0,0,0,0.06)",

                  backdropFilter:
                    "blur(24px)",
                }}
                className="market-row"
              >

                {/* LEFT */}

                <div>

                  <div
                    style={{
                      width: "72px",

                      height: "72px",

                      borderRadius:
                        "24px",

                      background:
                        index % 2 === 0
                          ? "#0A0A0A"
                          : "rgba(124,58,237,0.12)",

                      color:
                        index % 2 === 0
                          ? "white"
                          : "#7C3AED",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      fontWeight: 600,

                      fontSize: "1.1rem",
                    }}
                  >
                    0{index + 1}
                  </div>

                </div>

                {/* RIGHT */}

                <div>

                  <h3
                    style={{
                      fontSize:
                        "2rem",

                      lineHeight: "1",

                      letterSpacing:
                        "-2px",

                      color: "#0A0A0A",

                      fontWeight: 650,

                      marginBottom:
                        "1rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",

                      lineHeight: "1.9",

                      color:
                        "rgba(0,0,0,0.66)",

                      maxWidth:
                        "620px",
                    }}
                  >
                    {item.text}
                  </p>

                </div>

                {/* CONNECTOR */}

                {index !==
                  ecosystem.length -
                    1 && (
                  <div
                    style={{
                      position:
                        "absolute",

                      left: "54px",

                      bottom: "-35px",

                      width: "2px",

                      height: "35px",

                      background:
                        "linear-gradient(to bottom, rgba(124,58,237,0.35), transparent)",
                    }}
                  />
                )}

              </motion.div>

            )
          )}

        </div>

      </div>

      {/* RESPONSIVE */}

      <style>
        {`
          @media (max-width: 768px) {

            .market-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

    </section>
  );
};

export default Marketplace;