import { useState } from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setRegisterPage }) => {
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordHash = e.target.passwordHash.value;

    if (!name || !email || !password || !passwordHash) {
      return setError("All fields are required");
    }

    if (password.length < 8) {
      return setError("Password must be 8 characters or longer");
    }

    if (password !== passwordHash) {
      return setError("Password must be the same");
    }


    
    const info = {
      name,
      email,
      password,
      passwordHash,
    };


    const data = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const res = await data.json();
    if (res.acknowledged) {
      alert("Successfully registered");
      navigate("/home");
    } else if (res.msg === "Already Exists") {
      alert("User already registered");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left  text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="name"
          placeholder="Enter your name"
          required
          name="name"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="email"
          placeholder="Enter your email"
          required
          name="email"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="password"
          placeholder="Enter your password"
          required
          name="password"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Reassign Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="password"
          placeholder="Enter your password again"
          required
          name="passwordHash"
        />
      </div>

      {err && (
        <div className="w-11/12 mx-auto mb-5">
          <small className="text-red-500">{err}</small>
        </div>
      )}

      <button
        type="submit"
        className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>

      <div className="divider">OR</div>

      <div className="w-11/12 mx-auto mb-5">
        <small className="text-black">
          Already have an account?{" "}
          <button
            className="text-blue-300"
            onClick={() => setRegisterPage(false)}
          >
            Sign in here
          </button>
        </small>
      </div>
    </form>
  );
};

export default SignUp;

SignUp.propTypes = {
  setRegisterPage: PropTypes.any.isRequired,
};
