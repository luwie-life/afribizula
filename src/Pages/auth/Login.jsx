import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";

import GlassCard from "../../components/ui/GlassCard";
import Button from "../../components/ui/Button";

const Login = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <section className="auth-page">
      <div className="auth-container">

        <div className="auth-left">
          <span className="auth-badge">
            Welcome Back
          </span>

          <h1 className="auth-title">
            Build.
            <br />
            Sell.
            <br />
            Deliver.
            <br />
            Grow.
          </h1>

          <p className="auth-subtitle">
            The operating system for African
            businesses.
          </p>
        </div>

        <div className="auth-card">
          <GlassCard>

            <h2
              style={{
                marginBottom: "2rem",
                color: "#111",
              }}
            >
              Sign In
            </h2>

            <div className="form-group">

              <div className="input-wrap">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="input-wrap">
                <Lock size={18} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="eye-btn"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <Button>
                Sign In
              </Button>

              <Button variant="secondary">
                <div className="google-btn">
                  <Globe size={18} />
                  Continue With Google
                </div>
              </Button>

              <Link
                to="/forgot-password"
                className="auth-link"
              >
                Forgot Password?
              </Link>

              <p className="bottom-text">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="purple-link"
                >
                  Register
                </Link>
              </p>

            </div>

          </GlassCard>
        </div>

      </div>

      <style>{authStyles}</style>
    </section>
  );
};

export default Login;

const authStyles = `
.auth-page{
min-height:100vh;
background:#fafafa;
display:flex;
align-items:center;
justify-content:center;
padding:2rem;
}

.auth-container{
width:100%;
max-width:1100px;
display:grid;
grid-template-columns:1fr 500px;
gap:4rem;
align-items:center;
}

.auth-title{
font-size:4rem;
line-height:1;
font-weight:700;
color:#111;
margin-bottom:1rem;
}

.auth-subtitle{
color:#666;
max-width:500px;
}

.auth-badge{
color:#7C3AED;
font-weight:600;
}

.form-group{
display:flex;
flex-direction:column;
gap:1rem;
}

.input-wrap{
position:relative;
display:flex;
align-items:center;
}

.input-wrap svg:first-child{
position:absolute;
left:15px;
color:#777;
}

.input-wrap input{
width:100%;
padding:1rem 3rem;
border-radius:14px;
border:1px solid rgba(0,0,0,.08);
outline:none;
font-size:16px;
}

.eye-btn{
position:absolute;
right:15px;
border:none;
background:none;
cursor:pointer;
}

.google-btn{
display:flex;
align-items:center;
justify-content:center;
gap:.5rem;
}

.auth-link,
.purple-link{
color:#7C3AED;
text-decoration:none;
}

.bottom-text{
text-align:center;
color:#666;
}

@media(max-width:900px){
.auth-container{
grid-template-columns:1fr;
}
.auth-title{
font-size:2.7rem;
}
}

@media(max-width:500px){
.auth-title{
font-size:2rem;
}
}
`;