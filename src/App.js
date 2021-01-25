import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {
    const [list, setList] = useState([]);
    const [searchString, setSearchString] = useState('');
    // Нужно для поиска на стороне клиента
    // const [searchedUsers, setSearchUsers] = useState([]);

    // Поиск на стороне сервера
    useEffect(() => {
        const shouldSearch = searchString.length >= 3;

        const fetchData = async () => {
            await fetch(`http://localhost:3001/users?q=${searchString}`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));
        }

        if (shouldSearch) {
            fetchData();
        }
    }, [searchString]);

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
            await fetch(`http://localhost:3001/users`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));
        }

        fetchData();
    }, []);

    return (
        <Switch>
            <Route
                exact path="/"
                render={() => (
                    <UserTable
                        list={list}
                        setList={setList}
                        searchString={searchString}
                        setSearchString={setSearchString}
                    />
                )}
            />
            <Route path="/user/:id" render={() => (<UserInfo list={list} setList={setList} />)} />
        </Switch>
    )
}

export default App;

/*
    TODO:
        1) Дать пояснения к каждому элементу списка на странице UserInfo
        2) В компоненте UserInfo добавить кнопку удаления пользователя
        2.1) После отправки запроса на удаления нужно сделать редирект на главную страницу с помощью history.push()
        3) Добавить на главную страницу инпут для поиска
 */
