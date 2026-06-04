import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import GlassCard from "../../components/ui/GlassCard";
import Button from "../../components/ui/Button";

const ForgotPassword = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <GlassCard>

          <h2
            style={{
              marginBottom: "1rem",
              color: "#111",
            }}
          >
            Reset Password
          </h2>

          <p
            style={{
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            Enter your email address and
            we'll send you a reset link.
          </p>

          <div
            style={{
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            <Mail
              size={18}
              style={{
                position: "absolute",
                top: "50%",
                left: "15px",
                transform:
                  "translateY(-50%)",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding:
                  "1rem 1rem 1rem 3rem",
                borderRadius: "14px",
                border:
                  "1px solid rgba(0,0,0,.08)",
                outline: "none",
              }}
            />
          </div>

          <Button>
            Send Reset Link
          </Button>

          <p
            style={{
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            <Link
              to="/login"
              style={{
                color: "#7C3AED",
                textDecoration: "none",
              }}
            >
              Back To Login
            </Link>
          </p>

        </GlassCard>
      </div>
    </section>
  );
};

export default ForgotPassword;