export const loggerMiddleware = (store) => (next) => (action) => {
  // In case actions received with no types (Redux Thunk)
  if (!action.type) {
    return next(action);
  }
  console.group("Logger Output: ");
  console.log("Type: ", action.type);
  console.log("Payload: ", action.payload);
  console.log("Current State: ", store.getState());

  next(action);

  console.table("Next State: ", store.getState());
  console.groupEnd();
};
