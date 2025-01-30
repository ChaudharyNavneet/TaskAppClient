import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState("login"); // Default to "Login"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Tabs for Navigation */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 font-medium text-sm rounded ${
              activeTab === "login"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`px-4 py-2 font-medium text-sm rounded ${
              activeTab === "signup"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Render Form Based on Active Tab */}
        <div>
          {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
