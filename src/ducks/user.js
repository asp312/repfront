import {DATA_PER_PAGE, MODAL_NAME} from '../constants';
import { setModalName, resetState } from './modal';


const SET_AMOUNT_OF_USERS = '@USER/SET_AMOUNT_OF_USERS';
const SET_CURRENT_PAGE = '@USER/SET_CURRENT_PAGE';

const FETCH_USER_LIST_START = '@USER/FETCH_USER_LIST_START';
const FETCH_USER_LIST_SUCCESS = '@USER/FETCH_USER_LIST_SUCCESS';
const FETCH_USER_LIST_ERROR = '@USER/FETCH_USER_LIST_ERROR';

const ADD_USER_TO_LIST_START = '@USER/ADD_USER_TO_LIST_START';
const ADD_USER_TO_LIST_SUCCESS = '@USER/ADD_USER_TO_LIST_SUCCESS';
const ADD_USER_TO_LIST_ERROR = '@USER/ADD_USER_TO_LIST_ERROR';

const CHANGE_USER_START = '@USER/CHANGE_USER_START';
const CHANGE_USER_SUCCESS = '@USER/CHANGE_USER_SUCCESS';
const CHANGE_USER_ERROR = '@USER/ADD_USER_ERROR';

const CHANGE_USER_FIELD = '@USER/CHANGE_USER_FIELD';

const DELETE_USER_START = '@USER/DELETE_USER_START';
const DELETE_USER_SUCCESS = '@USER/DELETE_USER_SUCCESS';
const DELETE_USER_ERROR = '@USER/DELETE_USER_ERROR';

const deleteUserStart = () => ({
    type: DELETE_USER_START
});

const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS
});

const deleteUserError = () => ({
    type: DELETE_USER_ERROR
});

const changeUserStart = () => ({
    type: CHANGE_USER_START
});

const changeUserStartSuccess = () => ({
    type: CHANGE_USER_SUCCESS
});

const changeUserStartError = () => ({
    type: CHANGE_USER_ERROR
});

const setAmountOfUsers = (amountOfUsers) => ({
    type: SET_AMOUNT_OF_USERS,
    payload: amountOfUsers
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

const fetchUserListStart = () => ({
   type: FETCH_USER_LIST_START
});

const fetchUserListSuccess = (userList) => ({
    type: FETCH_USER_LIST_SUCCESS,
    payload: userList
});

const fetchUserListError = () => ({
    type: FETCH_USER_LIST_ERROR
});

export const changeUserField = (inputValue) => ({
    type: CHANGE_USER_FIELD,
    payload: inputValue // { [name]: '' }
});

export const fetchUserList = () => (dispatch, getState) => {
    const { currentPage } = getState().userReducer;

    dispatch(fetchUserListStart());

    // Получаем всех пользователей для определения их количества.
    // По этому количеству будем рассчитывать количество страниц для компонента Pagination
    fetch(`http://localhost:3001/users`)
        .then(res => res.json())
        .then(dataInJSON => dispatch(setAmountOfUsers(dataInJSON.length)))
        .catch(err => dispatch(fetchUserListError()));

    fetch(`http://localhost:3001/users?_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
        .then(res => res.json())
        .then(dataInJSON => dispatch(fetchUserListSuccess(dataInJSON)))
        .catch(err => dispatch(fetchUserListError()));
};

const addUserToListStart = () => ({
    type: ADD_USER_TO_LIST_START
 });

const addUserToListSuccess = () => ({
    type: ADD_USER_TO_LIST_SUCCESS
});

const addUserToListError = () => ({
    type: ADD_USER_TO_LIST_ERROR
});

export const addUserToList = () => (dispatch, getState) => {
    const { userToAdd } = getState().userReducer;

    dispatch(addUserToListStart());
    fetch('http://localhost:3001/users/', {
        method: 'POST',
        body: JSON.stringify(userToAdd),
        // В заголовке явно указываем, что в теле запроса лежит JSON формат
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            dispatch(addUserToListSuccess());
            dispatch(setModalName(MODAL_NAME.SUCCESS_MODAL));
        })
        .catch(err => {
            console.error(err)
            dispatch(addUserToListError());
        });
}

export const updateUserInfo = () => (dispatch, getState) => {
    const { userToAdd } = getState().userReducer;

    dispatch(changeUserStart());

    fetch(`http://localhost:3001/users/${userToAdd.id}`, {
        method: 'PUT',
        body: JSON.stringify(userToAdd),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            dispatch(changeUserStartSuccess());
            dispatch(fetchUserList());
        })
        .catch(() => dispatch(changeUserStartError()));
};

export const deleteUser = (params) => (dispatch, getState) => {

    dispatch(deleteUserStart());

    fetch(`http://localhost:3001/users/${params.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch(deleteUserSuccess());
                dispatch(resetState());
            })
            .catch(err => {
                dispatch(deleteUserError());
                dispatch(setModalName(MODAL_NAME.FAILURE_MODAL));
            });
}

const initialState = {
    userList: [],
    amountOfUsers: 0,
    currentPage: 1,
    isFetching: false,
    isError: false,
    searchString: '',
    userToAdd: {
        name: '',
        username: '',
        age: '',
        sex: '',
        email: '',
        address: '',
        phone: '',
        website:'',
        company: ''
    }
};

// const searchingUsers = () => (dispatch, getState) => {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LIST_START:
            return {
                ...state,
                isFetching: true,
                isError: false
            };
        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                userList: action.payload,
            };
        case FETCH_USER_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        case SET_AMOUNT_OF_USERS:
            return {
                ...state,
                amountOfUsers: action.payload
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case ADD_USER_TO_LIST_START:
            return {
                ...state,
                isFetching: true,
                isError: false
            };
        case ADD_USER_TO_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                userToAdd: { ...initialState.userToAdd }
            };
        case ADD_USER_TO_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        case CHANGE_USER_FIELD:
            return {
                ...state,
                userToAdd: {
                    ...state.userToAdd,
                    ...action.payload
                }
            };
        case CHANGE_USER_START:
            return {
                ...state,
                isFetching: true,
                isError: false,
            };
        case CHANGE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                userToAdd: { ...initialState.userToAdd }
            };
        case CHANGE_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true,
            };
            case DELETE_USER_START:
            return {
                ...state,
                isFetching: true,
                isError: false,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state.splice(...initialState.userToAdd.id, 1),
                isFetching: false,
                isError: false,
            };
        case DELETE_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true,
            };
        default:
            return { ...state };
    }
};

export default reducer;
