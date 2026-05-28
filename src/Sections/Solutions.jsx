import { motion } from "framer-motion";

const solutions = [
  {
    number: "01",

    title:
      "Business Operations",

    description:
      "Manage bookings, invoices, staff workflows, commitment payments, and customer interactions from one intelligent operational layer.",

    items: [
      "Smart Booking Links",
      "Invoices & Payments",
      "Staff Management",
      "Commitment Deposits",
    ],
  },

  {
    number: "02",

    title:
      "Retail & Inventory",

    description:
      "Track products, sales, inventory movement, orders, and business performance with infrastructure designed for modern African commerce.",

    items: [
      "Inventory Tracking",
      "Sales Analytics",
      "Order Management",
      "Bulk Product Pricing",
    ],
  },

  {
    number: "03",

    title:
      "Logistics Network",

    description:
      "Businesses and customers can instantly connect with nearby logistics providers for deliveries, dispatch operations, and fulfillment.",

    items: [
      "Location-Based Matching",
      "Dispatch Booking",
      "Delivery Tracking",
      "15% Platform Commission",
    ],
  },

  {
    number: "04",

    title:
      "B2B Marketplace",

    description:
      "Businesses can discover suppliers, source products in bulk, book services, and create commercial relationships inside the ecosystem.",

    items: [
      "Supplier Discovery",
      "Retail & Bulk Purchases",
      "Business Networking",
      "Service Discovery",
    ],
  },
];

const Solutions = () => {
  return (
    <section
      id="infrastructure"
      style={{
        position: "relative",

        background: "#F5F5F7",

        padding:
          "8rem 1.5rem",

        overflow: "hidden",
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",

          width: "520px",

          height: "520px",

          borderRadius: "999px",

          background:
            "rgba(124,58,237,0.08)",

          filter: "blur(120px)",

          top: "-10%",

          right: "-10%",
        }}
      />

      {/* CONTAINER */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: "1240px",

          margin: "0 auto",
        }}
      >

        {/* TOP */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "0.9fr 1.1fr",

            gap: "4rem",

            alignItems: "end",

            marginBottom: "6rem",
          }}
          className="solutions-top"
        >

          {/* LEFT */}

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
          >

            <span
              style={{
                display: "inline-flex",

                padding:
                  "0.7rem 1rem",

                borderRadius:
                  "999px",

                background:
                  "white",

                border:
                  "1px solid rgba(0,0,0,0.06)",

                color: "#7C3AED",

                fontSize: "0.92rem",

                fontWeight: 500,

                marginBottom:
                  "1.5rem",
              }}
            >
              Infrastructure
            </span>

            <h2
              style={{
                fontSize:
                  "clamp(3rem, 6vw, 5.7rem)",

                lineHeight: "0.92",

                letterSpacing:
                  "-5px",

                color: "#0A0A0A",

                fontWeight: 650,
              }}
            >
              One Platform.
              <br />
              Multiple
              <br />
              Business
              Systems.
            </h2>

          </motion.div>

          {/* RIGHT */}

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
              delay: 0.1,
            }}

            viewport={{
              once: true,
            }}
          >

            <p
              style={{
                fontSize: "1.08rem",

                lineHeight: "1.9",

                color:
                  "rgba(0,0,0,0.66)",

                maxWidth: "620px",

                marginBottom:
                  "2rem",
              }}
            >
              Bizula combines
              operational tools,
              logistics,
              commerce,
              supplier networks,
              customer discovery,
              and B2B workflows
              into one connected
              ecosystem built
              for African
              businesses.
            </p>

            {/* MINI METRICS */}

            <div
              style={{
                display: "flex",

                gap: "2.5rem",

                flexWrap: "wrap",
              }}
            >

              <div>
                <h3
                  style={{
                    fontSize: "2rem",

                    fontWeight: 650,

                    color: "#0A0A0A",

                    marginBottom:
                      "0.25rem",
                  }}
                >
                  5
                </h3>

                <p
                  style={{
                    color:
                      "rgba(0,0,0,0.58)",

                    fontSize: "0.92rem",
                  }}
                >
                  User Ecosystems
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "2rem",

                    fontWeight: 650,

                    color: "#0A0A0A",

                    marginBottom:
                      "0.25rem",
                  }}
                >
                  B2B
                </h3>

                <p
                  style={{
                    color:
                      "rgba(0,0,0,0.58)",

                    fontSize: "0.92rem",
                  }}
                >
                  Commerce Layer
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "2rem",

                    fontWeight: 650,

                    color: "#0A0A0A",

                    marginBottom:
                      "0.25rem",
                  }}
                >
                  API
                </h3>

                <p
                  style={{
                    color:
                      "rgba(0,0,0,0.58)",

                    fontSize: "0.92rem",
                  }}
                >
                  Scalable Structure
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* SOLUTION CARDS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(2, 1fr)",

            gap: "1.4rem",
          }}
          className="solutions-grid"
        >

          {solutions.map(
            (solution, index) => (

              <motion.div

                key={solution.title}

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

                whileHover={{
                  y: -6,
                }}

                style={{
                  position:
                    "relative",

                  padding:
                    "2rem",

                  borderRadius:
                    "34px",

                  background:
                    "rgba(255,255,255,0.82)",

                  border:
                    "1px solid rgba(0,0,0,0.05)",

                  backdropFilter:
                    "blur(24px)",

                  overflow:
                    "hidden",

                  minHeight:
                    "340px",
                }}
              >

                {/* TOP NUMBER */}

                <div
                  style={{
                    width: "58px",

                    height: "58px",

                    borderRadius:
                      "18px",

                    background:
                      index % 2 === 0
                        ? "rgba(124,58,237,0.12)"
                        : "#0A0A0A",

                    color:
                      index % 2 === 0
                        ? "#7C3AED"
                        : "white",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    fontWeight: 600,

                    marginBottom:
                      "2rem",
                  }}
                >
                  {solution.number}
                </div>

                {/* TITLE */}

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
                      "1.3rem",
                  }}
                >
                  {solution.title}
                </h3>

                {/* DESC */}

                <p
                  style={{
                    color:
                      "rgba(0,0,0,0.64)",

                    lineHeight: "1.9",

                    marginBottom:
                      "2rem",

                    maxWidth:
                      "480px",
                  }}
                >
                  {
                    solution.description
                  }
                </p>

                {/* FEATURES */}

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "0.8rem",
                  }}
                >

                  {solution.items.map(
                    (item) => (

                      <div
                        key={item}
                        style={{
                          padding:
                            "0.8rem 1rem",

                          borderRadius:
                            "999px",

                          background:
                            "rgba(0,0,0,0.04)",

                          color:
                            "#0A0A0A",

                          fontSize:
                            "0.9rem",

                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </div>

                    )
                  )}

                </div>

                {/* GLOW */}

                <div
                  style={{
                    position:
                      "absolute",

                    width: "240px",

                    height: "240px",

                    borderRadius:
                      "999px",

                    background:
                      index % 2 === 0
                        ? "rgba(124,58,237,0.08)"
                        : "rgba(0,0,0,0.05)",

                    filter:
                      "blur(90px)",

                    bottom: "-20%",

                    right: "-10%",
                  }}
                />

              </motion.div>

            )
          )}

        </div>

      </div>

      {/* RESPONSIVE */}

      <style>
        {`
          @media (max-width: 980px) {

            .solutions-top {
              grid-template-columns: 1fr !important;
            }

            .solutions-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

    </section>
  );
};

export default Solutions;