export function GlobalReducer(state, dispatch) {
  const { action, payload } = dispatch;
  switch (action) {
    case "SET_TASKS":
      return { ...state, tasks: payload || [] };
    case "ADD_TASK":
      return { ...state, tasks: [payload, ...state.tasks] };
    case "EDIT_TASK":
      return { ...state, tasks: editState([...state.tasks], payload) };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks].filter((d) => d._id !== payload),
      };
    default:
      return state;
  }
}

function editState(data, payload) {
  const { _id } = payload;
  const objIndex = data.findIndex((obj) => obj._id === _id);
  const obj = { ...data[objIndex], ...payload };
  const newData = [...data];
  newData[objIndex] = obj;
  return newData;
}
