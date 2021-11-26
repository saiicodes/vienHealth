import React, { useState } from "react";
import * as api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };

const User = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      //sign up the user
      api
        .signUp(userData)
        .then((res) => {
          const data = res.data;
          localStorage.setItem("profile", JSON.stringify({ data }));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setUserData(initialState);
        });
    } else {
      // sign in the user
      api
        .signIn(userData)
        .then((res) => {
          const data = res.data;
          localStorage.setItem("profile", JSON.stringify({ data }));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setUserData(initialState);
        });
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setUserData(initialState);
    setIsSignUp(!isSignUp);
    setError(false);
  };

  return (
    <div className="h-screen">
      <div className="p-6 max-w-sm mx-auto bg-gray-200 border-2 rounded-md flex flex-col items-center space-x-4">
        <div className="text-2xl font-medium text-black">
          {isSignUp ? "Sign Up" : "Sign In"}
        </div>

        {/* error */}
        <div className="text-lg text-red-500">
          {error ? "Invalid Details Provided" : null}
        </div>

        <form onSubmit={handleSubmit} className="">
          {isSignUp ? (
            <>
              <label
                htmlFor="name"
                className="font-display font-medium text-lg capitalize"
              >
                name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
                className="w-full mb-2 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out lg:mb-3"
              />
            </>
          ) : null}

          <label
            htmlFor="email"
            className="font-display font-medium text-lg capitalize"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="w-full mb-2 bg-jet rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out lg:mb-3"
          />
          <label
            htmlFor="password"
            className="font-display font-medium text-lg capitalize"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            className="w-full mb-2 bg-jet rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out lg:mb-3"
          />
          {isSignUp ? (
            <>
              <label
                htmlFor="confirm password"
                className="font-display font-medium text-lg capitalize"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full mb-2 bg-jet rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out lg:mb-3"
              />
            </>
          ) : null}

          {/* Switch Statement */}
          {isSignUp ? (
            <p className="text-sm text-gray-900">
              Already have an account?
              <span
                className=" text-green-700 cursor-pointer"
                onClick={() => switchMode()}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-900">
              Don't have an account?
              <span
                className="text-green-700 cursor-pointer"
                onClick={() => switchMode()}
              >
                Sign Up
              </span>
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full font-body font-bold mt-4 text-black bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg uppercase tracking-widest"
          >
            {isSignUp ? "sign up" : "sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
