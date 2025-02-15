const BACKEND_URL= "https://taskappserver-v9f9.onrender.com"
// const BACKEND_URL = "http://localhost:4000"
export const login = (username, password) => {
  const authToken = {
    username: username,
    password: password,
  }
  return (dispatch) => {
    dispatch({ type: "LOGIN_PENDING" });
    fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('authToken', JSON.stringify(authToken));
        if (data.statusCode !== 401)
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      });
  };
};

export const signUp = (username, password) => {
  const authToken = {
    username: username,
    password: password,
  }
  return (dispatch) => {
    dispatch({ type: "SIGNUP_PENDING" });
    fetch(`${BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('authToken',JSON.stringify(authToken));
        if (data.statusCode !== 401)
        dispatch({ type: "SIGNUP_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SIGNUP_FAILURE", payload: error.message });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem('authToken');
    // Clear state here 
  };
};

