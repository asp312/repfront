import { DATA_PER_PAGE } from '../constants';
import { setModalName } from '../../ducks/modal';

const SET_AMOUNT_OF_USERS = '@USER/SET_AMOUNT_OF_USERS';
const SET_CURRENT_PAGE = '@USER/SET_CURRENT_PAGE';

const FETCH_USER_LIST_START = '@USER/FETCH_USER_LIST_START';
const FETCH_USER_LIST_SUCCESS = '@USER/FETCH_USER_LIST_SUCCESS';
const FETCH_USER_LIST_ERROR = '@USER/FETCH_USER_LIST_ERROR';

const ADD_USER_TO_LIST_START = '@USER/ADD_USER_TO_LIST_START';
const ADD_USER_TO_LIST_SUCCESS = '@USER/ADD_USER_TO_LIST_SUCCESS';
const ADD_USER_TO_LIST_ERROR = '@USER/ADD_USER_TO_LIST_ERROR';

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

const addUserToListSuccess = (userToAdd) => ({
    type: ADD_USER_TO_LIST_SUCCESS,
    payload: userToAdd
});

const addUserToListError = () => ({
    type: ADD_USER_TO_LIST_ERROR
});

export const adUserToList = () => (dispatch, getState) => {
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
            dispatch(addUserToListSuccess(userToAdd));
            dispatch(setModalName(MODAL_NAME.SUCCESS_MODAL));
        })
        .catch(err => {
            console.error(err)
            dispatch(addUserToListError());
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
                userList: action.payload,
            };
            case ADD_USER_TO_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        default:
            return { ...state };
    }
};

export default reducer;
