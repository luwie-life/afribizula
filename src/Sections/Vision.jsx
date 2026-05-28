import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import VisionImage from "../assets/vision.jpg";

const Vision = () => {

  const [offsetY, setOffsetY] =
    useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <section
      id="vision"
      style={{
        position: "relative",

        minHeight: "125vh",

        overflow: "hidden",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        background: "#000",
      }}
    >

      {/* PARALLAX IMAGE */}

      <motion.div
        style={{
          position: "absolute",

          inset: 0,

          backgroundImage:
            `url(${VisionImage})`,

          backgroundSize: "cover",

          backgroundPosition:
            "center",

          transform: `translateY(${offsetY * 0.12}px)`,

          scale: 1.08,
        }}
      />

      {/* DARK OVERLAY */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.78))",
        }}
      />

      {/* NOISE */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          opacity: 0.04,

          backgroundImage:
            "radial-gradient(#ffffff 0.7px, transparent 0.7px)",

          backgroundSize:
            "24px 24px",
        }}
      />

      {/* CONTENT */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        style={{
          position: "relative",

          zIndex: 5,

          width: "100%",

          maxWidth: "1180px",

          padding:
            "0 1.5rem",
        }}
      >

        {/* TOP LABEL */}

        <div
          style={{
            display: "flex",

            justifyContent:
              "center",

            marginBottom: "2rem",
          }}
        >

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "0.6rem",

              padding:
                "0.75rem 1rem",

              borderRadius:
                "999px",

              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter:
                "blur(20px)",

              color:
                "rgba(255,255,255,0.72)",

              fontSize: "0.9rem",
            }}
          >
            Built For Africa’s
            Growing Economy
          </div>

        </div>

        {/* MAIN HEADING */}

        <motion.h2

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.1,
          }}

          viewport={{
            once: true,
          }}

          style={{
            textAlign: "center",

            fontSize:
              "clamp(3rem, 7vw, 6.5rem)",

            lineHeight: "0.92",

            letterSpacing: "-5px",

            color: "white",

            fontWeight: 650,

            marginBottom: "2rem",

            maxWidth: "1050px",

            marginInline: "auto",
          }}
        >
          Connecting
          Businesses,
          Suppliers,
          Logistics,
          And Customers
          Into One Network
        </motion.h2>

        {/* SUBTEXT */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          style={{
            textAlign: "center",

            fontSize: "1.08rem",

            lineHeight: "1.9",

            color:
              "rgba(255,255,255,0.72)",

            maxWidth: "780px",

            margin:
              "0 auto 5rem",
          }}
        >
          African businesses
          operate across fragmented
          systems every day.
          Bizula unifies operations,
          commerce, logistics,
          bookings, supplier
          relationships, and
          customer interactions
          into one connected
          ecosystem designed
          for growth.
        </motion.p>

        {/* FLOATING INFO CARDS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(3, 1fr)",

            gap: "1.3rem",
          }}
          className="vision-grid"
        >

          {/* CARD 1 */}

          <motion.div

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
            }}

            viewport={{
              once: true,
            }}

            style={{
              padding:
                "1.6rem",

              borderRadius:
                "28px",

              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter:
                "blur(20px)",
            }}
          >

            <div
              style={{
                width: "52px",

                height: "52px",

                borderRadius:
                  "16px",

                background:
                  "rgba(124,58,237,0.18)",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                marginBottom:
                  "1.3rem",

                color: "#C4B5FD",

                fontWeight: 600,
              }}
            >
              01
            </div>

            <h3
              style={{
                color: "white",

                fontSize: "1.4rem",

                fontWeight: 600,

                marginBottom:
                  "1rem",

                letterSpacing:
                  "-1px",
              }}
            >
              Unified Operations
            </h3>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.7)",

                lineHeight: "1.8",

                fontSize: "0.97rem",
              }}
            >
              Manage bookings,
              inventory, logistics,
              staff operations,
              payments, and
              workflows from one
              intelligent system.
            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div

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
              delay: 0.1,
            }}

            viewport={{
              once: true,
            }}

            style={{
              padding:
                "1.6rem",

              borderRadius:
                "28px",

              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter:
                "blur(20px)",
            }}
          >

            <div
              style={{
                width: "52px",

                height: "52px",

                borderRadius:
                  "16px",

                background:
                  "rgba(255,255,255,0.1)",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                marginBottom:
                  "1.3rem",

                color: "white",

                fontWeight: 600,
              }}
            >
              02
            </div>

            <h3
              style={{
                color: "white",

                fontSize: "1.4rem",

                fontWeight: 600,

                marginBottom:
                  "1rem",

                letterSpacing:
                  "-1px",
              }}
            >
              B2B Commerce
            </h3>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.7)",

                lineHeight: "1.8",

                fontSize: "0.97rem",
              }}
            >
              Businesses can source
              products in retail or
              bulk, discover services,
              and connect directly
              with suppliers through
              Bizula’s ecosystem.
            </p>

          </motion.div>

          {/* CARD 3 */}

          <motion.div

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
              delay: 0.2,
            }}

            viewport={{
              once: true,
            }}

            style={{
              padding:
                "1.6rem",

              borderRadius:
                "28px",

              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter:
                "blur(20px)",
            }}
          >

            <div
              style={{
                width: "52px",

                height: "52px",

                borderRadius:
                  "16px",

                background:
                  "rgba(124,58,237,0.18)",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                marginBottom:
                  "1.3rem",

                color: "#C4B5FD",

                fontWeight: 600,
              }}
            >
              03
            </div>

            <h3
              style={{
                color: "white",

                fontSize: "1.4rem",

                fontWeight: 600,

                marginBottom:
                  "1rem",

                letterSpacing:
                  "-1px",
              }}
            >
              Logistics Infrastructure
            </h3>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.7)",

                lineHeight: "1.8",

                fontSize: "0.97rem",
              }}
            >
              Connect customers and
              businesses with nearby
              logistics providers
              for seamless deliveries
              and operational speed.
            </p>

          </motion.div>

        </div>

      </motion.div>

      {/* RESPONSIVE */}

      <style>
        {`
          @media (max-width: 980px) {

            .vision-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

    </section>
  );
};

export default Vision;