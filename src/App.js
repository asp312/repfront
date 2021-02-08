import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router';
import './style.css';
import { ModalContext } from './context/ModalContext';
import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';
import { ModalBlock } from './components';
import { useDispatch } from 'react-redux';
import { fetchUserList } from './ducks/user';


function App() {
    const [searchString, setSearchString] = useState('');

    const location = useLocation();
    const dispatch = useDispatch();

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
                            <UserTable
                                searchString={searchString}
                                setSearchString={setSearchString}
                            />
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

