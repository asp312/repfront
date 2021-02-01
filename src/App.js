import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';
import { DATA_PER_PAGE } from './constants';


function App() {
    const [listToShow, setList] = useState([]);
    const [amountOfUsers, setAmountOfUsers] = useState(0);
    const [searchString, setSearchString] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();

    // Нужно для поиска на стороне клиента
    // const [searchedUsers, setSearchUsers] = useState([]);

    // Поиск на стороне сервера
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:3001/users?q=${searchString}&_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));

        }

        fetchData();
    }, [searchString, currentPage]);

    // Поиск на стороне сервера
    // const isSearchStringEmpty = searchString.length === 0;
    // const usersToShow = isSearchStringEmpty ? list : searchedUsers;
    //
    // useEffect(() => {
    //     const searchedUsers = list.filter(user => user.name.includes(searchString));
    //
    //     setSearchUsers(searchedUsers);
    // }, [searchString]);

    useEffect(() => {
        const fetchData = async () => {
            // Получаем всех пользователей для определения их количества.
            // По этому количеству будем рассчитывать количество страниц для компонента Pagination
            await fetch(`http://localhost:3001/users`)
                .then(res => res.json())
                .then(dataInJSON => setAmountOfUsers(dataInJSON.length));

            await fetch(`http://localhost:3001/users?_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON))
        }

        fetchData();
    }, [location.pathname]);

    return (
        <Switch>
            <Route
                exact path="/"
                render={() => (
                    <UserTable
                        list={listToShow}
                        amountOfUser={amountOfUsers}
                        setList={setList}
                        searchString={searchString}
                        setSearchString={setSearchString}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            />
            <Route
                path="/user/:id"
                render={() => (
                    <UserInfo
                        list={listToShow}
                        setList={setList}
                    />
                )}
            />
        </Switch>
    )
}

export default App;
