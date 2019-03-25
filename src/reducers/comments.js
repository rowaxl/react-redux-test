export default (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_COMMENT':
            return action.payload;
        default:
            return state;
    }
}