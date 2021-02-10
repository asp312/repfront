import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router';
import './style.css';
import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';
import { ModalBlock } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList, searchingUsers } from './ducks/user';


function App() {
    const {
        currentPage,
        searchString
    } = useSelector((state) => ({
        currentPage: state.userReducer.currentPage,
        searchString: state.userReducer.searchString
    }));


    const location = useLocation();
    const dispatch = useDispatch();

     useEffect(() => {
         dispatch(searchingUsers());
     }, [searchString, currentPage]);

    // Поиск на стороне сервера
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch(`http://localhost:3001/users?q=${searchString}&_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
    //             .then(res => res.json())
    //             .then(dataInJSON => setList(dataInJSON));
    //
    //     }
    //
    //     fetchData();
    // }, [searchString, currentPage]);

    useEffect(() => {
        // Отправляем запрос за пользователями
        dispatch(fetchUserList());
    }, [location.pathname]);

    return (
            <>
                <ModalBlock />
                <Switch>
                    <Route
                        exact path="/"
                        render={() => (
                            <UserTable />
                        )}
                    />
                    <Route
                        path="/user/:id"
                        render={() => (
                            <UserInfo />
                        )}
                    />
                </Switch>
            </>
    )
}

export default App;

/***
 * TODO:
 *  1. Вытащить в Store:
 *      1.1. Логику поиска в Store
 *      1.2. Логику удаления
 */


