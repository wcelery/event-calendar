const checkLocalStorage = () => {
  return Object.assign(
    {},
    ...Object.entries(localStorage).map(([id, value]) => ({
      [id]: JSON.parse(value),
    }))
  );
};

export const initialState = {
  date: "",
  events: checkLocalStorage(),
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "push_date_to_context":
      return { ...state, date: action.payload };
    case "push_event_to_context":
      return {
        ...state,
        events: {
          ...state.events,
          [`event-${action.payload.name}`]: action.payload,
        },
      };
    default:
      return state;
  }
}
