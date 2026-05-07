import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <style>
        {`
        .page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          font-family: inherit;
        }

        .card {
          width: 380px;
          padding: 35px;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          border-top: 5px solid rgb(23, 156, 159);
        }

        .title {
          font-size: 26px;
          font-weight: 600;
          color: rgb(23, 156, 159);
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 25px;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: 0.3s;
        }

        .input:focus {
          border-color: rgb(23, 156, 159);
          outline: none;
          box-shadow: 0 0 6px rgba(23, 156, 159, 0.3);
        }

        .button {
          width: 100%;
          padding: 14px;
          margin-top: 20px;
          border: none;
          border-radius: 10px;
          background: rgb(23, 156, 159); /* teal */
          color: white;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .button:hover {
          background: rgb(18, 130, 132);
          transform: scale(1.05);
        }

        .footerText {
          margin-top: 15px;
          font-size: 13px;
        }

        .link {
          color: rgb(23, 156, 159);
          cursor: pointer;
          font-weight: 500;
        }

        .link:hover {
          text-decoration: underline;
        }
        `}
      </style>

      <div className="page">
        <div className="card">
          <h2 className="title">Join Strong Girl 💪</h2>
          <p className="subtitle">Create your account</p>

          <div className="formGroup">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button">Sign Up</button>

          <p className="footerText">
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/login")}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;