import axios from "axios";

export async function setTasks(dispatch) {
  try {
    const data = await axios
      .get(process.env.REACT_APP_BASE_URL + "/todos")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log("logging error while calling todos from action", error);
      });

    dispatch({
      action: "SET_TASKS",
      payload: data,
    });
  } catch (err) {}
}

export function addTask(dispatch, payload) {
  dispatch({
    action: "ADD_TASK",
    payload,
  });
}

export function editTask(dispatch, payload) {
  dispatch({
    action: "EDIT_TASK",
    payload,
  });
}

export function deleteTask(dispatch, payload) {
  dispatch({
    action: "DELETE_TASK",
    payload,
  });
}
