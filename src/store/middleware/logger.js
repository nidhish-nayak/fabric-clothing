// Creating your own logger middleware, not using it in Store since we already have a logger middleware from redux

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

    // Next state will be only available post running the reducer. Hence, printing the state after next
    console.table("Next State: ", store.getState());
    console.groupEnd();
};
