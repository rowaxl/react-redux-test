export default ({ dispatch }) => next => action => {
    // check action's payload is promise
    // if does, wait resolve
    // if doesn't, send action to next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};