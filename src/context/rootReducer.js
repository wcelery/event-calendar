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
    case "remove_event_from_context":
      localStorage.removeItem(`event-${action.payload}`); //kinda hack
      return {
        ...state,
        events: Object.keys(state.events)
          .filter((item) => item !== `event-${action.payload}`) //remove whole entry by key
          .reduce(
            (prev, curr) => ({ ...prev, [curr]: state.events[curr] }), //reassembly whole object from array
            {}
          ),
      };
    default:
      return state;
  }
}
