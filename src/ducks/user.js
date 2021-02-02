const CHANGE_SOME_VALUE = '@USER/CHANGE_SOME_VALUE';

export const changeSomeValue = (value) => ({
    type: CHANGE_SOME_VALUE,
    payload: value
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
        default:
            return { ...state };
    }
};

export default reducer;

/**
 * TODO:
 *  1. Написать экшен, который будет заполнять поле users пользователями, которые пришли с бэкенда
 *  2. Вызывать этот экшен необходимо диспатчить после того, как данные пришли с бэкенда
 *      3.1) Через connect()
 *      3.2) Через useDispatch()
 *  3. Нужно получить этих пользователей из хранилища в компоненте UserTable
 *      3.1) Через connect()
 *      3.2) Через useSelector()
 */
