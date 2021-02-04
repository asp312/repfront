const CHANGE_SOME_VALUE = '@USER/CHANGE_SOME_VALUE';
const ADD_USER_TO_LIST = '@USER/ADD_USER_TO_LIST';

export const changeSomeValue = (value) => ({
    type: CHANGE_SOME_VALUE,
    payload: value
});

export const addUserToList = (userList) => ({
    type: ADD_USER_TO_LIST,
    payload: { userList }
});

const initialState = {
    someValue: '',
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOME_VALUE:
            return {
                ...state,
                someValue: action.payload
            };
        case ADD_USER_TO_LIST:
            return {
                ...state,
                users: action.payload.userList
            };
        default:
            return { ...state };
    }
};

export default reducer;
