const SET_MODAL_NAME = '@MODAL/SET_MODAL_NAME';
const RESET_STATE = '@MODAL/RESET_STATE';

export const setModalName = (modalName) => ({
   type: SET_MODAL_NAME,
   payload: modalName
});

export const resetState = () => ({
    type: RESET_STATE
});

const initialState = '';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_NAME:
            return action.payload;
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
