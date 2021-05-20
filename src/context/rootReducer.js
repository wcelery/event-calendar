export const initialState = {
  date: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "push_date_to_context":
      return { ...state, date: action.payload };
    default:
      return state;
  }
}
