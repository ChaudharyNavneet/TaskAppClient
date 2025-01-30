const BACKEND_URL= "https://taskappserver-v9f9.onrender.com"
// const BACKEND_URL = "http://localhost:4000"

export const fetchTodos = (userId) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    userId: userId,
  };
  return (dispatch) => {
    dispatch({ type: "FETCH_TODO_LIST_PENDING" });
    fetch(`${BACKEND_URL}/todos/${userId}`, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_TODO_LIST_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_TODO_LIST_FAILURE", payload: error.message });
      });
  };
};

export const addTodo = (todo) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  return (dispatch) => {
    dispatch({ type: "ADD_TODO_PENDING" });
    fetch(`${BACKEND_URL}/addTodo`, options)
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "ADD_TODO_SUCCESS",
          payload: todo,
        });
      })
      .catch((error) => {
        dispatch({ type: "ADD_TODO_FAILURE", payload: error.message });
      });
  };
};

export const deleteTodo = (todoId, userId) => {
  const options = {
    method: "DELETE",
  };
  return (dispatch) => {
    dispatch({ type: "DELETE_TODO_PENDING" });
    fetch(`${BACKEND_URL}/deleteTodo/${todoId}`, options)
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: "DELETE_TODO_SUCCESS", payload: todoId });
      })
      .catch((error) => {
        dispatch({ type: "DELETE_TODO_FAILURE", payload: error.message });
      });
  };
};

export const editTodo = (todoId, updatedTodo) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  };
  return (dispatch) => {
    dispatch({ type: "EDIT_TODO_PENDING" });
    fetch(`${BACKEND_URL}/editTodo/${todoId}`, options)
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "EDIT_TODO_SUCCESS",
          payload: { todoId: todoId, updatedTodo: updatedTodo },
        });
      })
      .catch((error) => {
        dispatch({ type: "EDIT_TODO_FAILURE", payload: error.message });
      });
  };
};
