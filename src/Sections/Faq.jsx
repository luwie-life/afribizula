import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "What is Bizula?",
    answer:
      "Bizula is a commerce infrastructure platform that helps African businesses manage operations, bookings, inventory, logistics, payments, and customer interactions from one connected ecosystem.",
  },

  {
    question:
      "Who can use Bizula?",
    answer:
      "Bizula is designed for service businesses, retail businesses, enterprise suppliers, logistics providers, and customers looking to access modern commerce experiences.",
  },

  {
    question:
      "Does Bizula support logistics and delivery?",
    answer:
      "Yes. Businesses can connect with logistics providers directly inside the platform to manage dispatch operations, deliveries, and fulfillment workflows.",
  },

  {
    question:
      "Can customers order products or book services?",
    answer:
      "Yes. Customers can discover businesses, book services, place orders, and interact with businesses through the Bizula ecosystem.",
  },

  {
    question:
      "How do commitment payments work?",
    answer:
      "Businesses can request upfront commitment payments before appointments, bookings, or service confirmations to reduce cancellations and improve operational efficiency.",
  },

  {
    question:
      "Is Bizula only for large businesses?",
    answer:
      "No. Bizula is designed for both small and large businesses. Whether you are a freelancer, salon owner, retailer, supplier, or enterprise business, the platform scales with your operations.",
  },

  {
    question:
      "Will Bizula provide marketplace features?",
    answer:
      "Yes. Businesses will be able to discover suppliers, source products, connect with logistics providers, and build commercial relationships directly inside the ecosystem.",
  },

  {
    question:
      "How do logistics partners earn on Bizula?",
    answer:
      "Logistics providers receive delivery requests from businesses and customers within nearby regions and earn revenue from completed deliveries processed through the platform.",
  },
];

const FAQ = () => {
  const [active, setActive] =
    useState(null);

  return (
    <section
      id="faq"
      style={{
        position: "relative",

        background: "#F5F5F7",

        padding:
          "9rem 1.5rem",

        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",

          width: "650px",

          height: "650px",

          borderRadius: "999px",

          background:
            "rgba(124,58,237,0.08)",

          filter: "blur(140px)",

          bottom: "-20%",

          left: "-10%",
        }}
      />

      {/* CONTAINER */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: "980px",

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

            marginBottom: "5rem",
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
            Frequently Asked Questions
          </span>

          <h2
            style={{
              fontSize:
                "clamp(3rem, 6vw, 5.8rem)",

              lineHeight: "0.92",

              letterSpacing:
                "-5px",

              color: "#0A0A0A",

              fontWeight: 650,

              marginBottom:
                "1.5rem",
            }}
          >
            Everything You
            Need To Know
          </h2>

          <p
            style={{
              fontSize: "1.05rem",

              lineHeight: "1.9",

              color:
                "rgba(0,0,0,0.64)",

              maxWidth: "720px",

              margin: "0 auto",
            }}
          >
            Learn how Bizula
            powers operations,
            commerce, logistics,
            supplier networks,
            and customer
            experiences across
            one connected platform.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: "1rem",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen =
              active === index;

            return (
              <motion.div
                key={faq.question}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.05,
                }}

                viewport={{
                  once: true,
                }}

                style={{
                  borderRadius:
                    "28px",

                  background:
                    "rgba(255,255,255,0.82)",

                  border:
                    "1px solid rgba(0,0,0,0.06)",

                  backdropFilter:
                    "blur(20px)",

                  overflow:
                    "hidden",
                }}
              >
                {/* QUESTION */}

                <button
                  onClick={() =>
                    setActive(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  style={{
                    width: "100%",

                    border: "none",

                    background:
                      "transparent",

                    padding:
                      "1.6rem 1.8rem",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    cursor: "pointer",

                    textAlign:
                      "left",
                  }}
                >
                  <h3
                    style={{
                      fontSize:
                        "1.1rem",

                      color:
                        "#0A0A0A",

                      fontWeight: 600,

                      maxWidth:
                        "85%",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <div
                    style={{
                      width: "42px",

                      height: "42px",

                      borderRadius:
                        "999px",

                      background:
                        isOpen
                          ? "#7C3AED"
                          : "rgba(0,0,0,0.05)",

                      color:
                        isOpen
                          ? "white"
                          : "#0A0A0A",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      fontSize:
                        "1.2rem",

                      flexShrink: 0,

                      transition:
                        "0.3s ease",
                    }}
                  >
                    {isOpen
                      ? "−"
                      : "+"}
                  </div>
                </button>

                {/* ANSWER */}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}

                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}

                      exit={{
                        height: 0,
                        opacity: 0,
                      }}

                      transition={{
                        duration: 0.35,
                      }}

                      style={{
                        overflow:
                          "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding:
                            "0 1.8rem 1.8rem 1.8rem",
                        }}
                      >
                        <p
                          style={{
                            color:
                              "rgba(0,0,0,0.66)",

                            lineHeight:
                              "1.9",

                            maxWidth:
                              "760px",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;