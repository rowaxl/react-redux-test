import { validate } from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    if (validate(getState(), stateSchema)) {
        console.warn('invalid state schema detected');
    }
}