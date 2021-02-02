const CHANGE_SOME_VALUE = '@USER/CHANGE_SOME_VALUE';

export const changeSomeValue = (value) => ({
    type: CHANGE_SOME_VALUE,
    payload: value
});

const initialState = {
    someValue: '',
    users: [{ id: 1 }, { id: 2 }, { id: 3 }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOME_VALUE:
            return {
                ...state,
                someValue: action.payload
            };
        default:
            return { ...state };
    }
};

export default reducer;
