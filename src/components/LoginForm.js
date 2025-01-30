import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { fetchTodos } from "../redux/actions/todoActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const loggedIn = useSelector((state) => state?.auth?.loggedIn || false);
  const userId = useSelector((state) => state?.auth?._id || "");

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchTodos(userId));
    }
  }, [loggedIn, userId, dispatch]);

  const validateForm = () => {
    const validationErrors = {};
    if (!username.trim()) validationErrors.username = "Username is required.";
    if (!password) validationErrors.password = "Password is required.";
    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md ${
            errors.username ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
