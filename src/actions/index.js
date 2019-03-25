export const fetchComment = comment => dispatch => {
    dispatch({ type: 'ADD_COMMENT', payload: comment });
}