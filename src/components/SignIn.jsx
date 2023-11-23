import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setRegisterPage }) => {
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const email = e.target.email.value;

    if (!password || !email) {
      setError("Fields are required");
    }

    const info = {
      password,
      email,
    };

    const data = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const res = await data.json();
    if (res?.token) {
      alert("Successfully LoggedIn");
      navigate("/home");
    } else if (
      res.msg === "Password did not match" ||
      res.msg === "User not found"
    ) {
      setError(res.msg);
    }
    console.log(res);
  };

  return (
    <form onSubmit={handleLogin}>
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

      {err && (
        <div className="w-11/12 mx-auto mb-5">
          <small className="text-red-500">{err}</small>
        </div>
      )}

      <button
        type="submit"
        className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
      >
        Sign In
      </button>

      <div className="divider">OR</div>

      <div className="w-11/12 mx-auto mb-5">
        <small className="text-black">
          Don`&#39`t have an account?{" "}
          <button
            onClick={() => setRegisterPage(true)}
            className="text-blue-400"
          >
            Sign up now
          </button>
        </small>
      </div>
    </form>
  );
};

export default SignIn;

SignIn.propTypes = {
  setRegisterPage: PropTypes.any.isRequired,
};
