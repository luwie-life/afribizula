import { useState } from "react";
import { Link } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";

import GlassCard from "../../components/ui/GlassCard";
import Button from "../../components/ui/Button";

import FadeIn from "../../components/motions/FadeIn";
import StaggerContainer from "../../components/motions/StaggerContainer";

const Register = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  return (
    <section className="register-page">
      <StaggerContainer>
        <div className="register-container">

          {/* LEFT SIDE */}

          <FadeIn>
            <div className="register-content">

              <span className="register-badge">
                Join Bizula
              </span>

              <h1 className="register-title">
                Start.
                <br />
                Build.
                <br />
                Scale.
                <br />
                Succeed.
              </h1>

              <p className="register-subtitle">
                Create your Bizula account and
                access bookings, logistics,
                inventory, marketplace and
                customer management from one
                unified platform.
              </p>

            </div>
          </FadeIn>

          {/* FORM */}

          <FadeIn>
            <div className="register-card">

              <GlassCard>

                <h2 className="form-title">
                  Create Account
                </h2>

                <div className="form-group">

                  {/* FULL NAME */}

                  <div className="input-wrap">
                    <User size={18} />

                    <input
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>

                  {/* EMAIL */}

                  <div className="input-wrap">
                    <Mail size={18} />

                    <input
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* PASSWORD */}

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
                      className="eye-btn"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {/* CONFIRM PASSWORD */}

                  <div className="input-wrap">
                    <Lock size={18} />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm Password"
                    />

                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {/* REGISTER */}

                  <Button>
                    Create Account
                  </Button>

                  {/* GOOGLE */}

                  <Button variant="secondary">
                    <div className="google-btn">
                      <Globe size={18} />
                      Continue With Google
                    </div>
                  </Button>

                  <p className="bottom-text">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="purple-link"
                    >
                      Sign In
                    </Link>
                  </p>

                </div>

              </GlassCard>

            </div>
          </FadeIn>

        </div>
      </StaggerContainer>

      <style>
        {`
          .register-page{
            min-height:100vh;
            background:#FAFAFA;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:2rem;
          }

          .register-container{
            width:100%;
            max-width:1100px;
            display:grid;
            grid-template-columns:1fr 500px;
            gap:4rem;
            align-items:center;
          }

          .register-badge{
            color:#7C3AED;
            font-weight:600;
            display:block;
            margin-bottom:1rem;
          }

          .register-title{
            font-size:4rem;
            line-height:1;
            font-weight:700;
            color:#0A0A0A;
            margin-bottom:1rem;
            letter-spacing:-3px;
          }

          .register-subtitle{
            color:#666;
            max-width:500px;
            line-height:1.7;
          }

          .register-card{
            width:100%;
          }

          .form-title{
            color:#0A0A0A;
            font-size:2rem;
            font-weight:600;
            margin-bottom:2rem;
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
            color:#666;
          }

          .input-wrap input{
            width:100%;
            padding:1rem 3rem;
            border-radius:14px;
            border:1px solid rgba(0,0,0,0.08);
            outline:none;
            font-size:16px;
            background:white;
            box-sizing:border-box;
          }

          .eye-btn{
            position:absolute;
            right:15px;
            border:none;
            background:none;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .google-btn{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:.6rem;
          }

          .bottom-text{
            text-align:center;
            color:#666;
            margin-top:.5rem;
          }

          .purple-link{
            color:#7C3AED;
            text-decoration:none;
            font-weight:500;
          }

          @media(max-width:1024px){

            .register-container{
              grid-template-columns:1fr;
              gap:3rem;
            }

            .register-title{
              font-size:3rem;
            }
          }

          @media(max-width:768px){

            .register-page{
              padding:1.5rem;
            }

            .register-title{
              font-size:2.5rem;
            }
          }

          @media(max-width:480px){

            .register-title{
              font-size:2rem;
            }

            .form-title{
              font-size:1.6rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Register;