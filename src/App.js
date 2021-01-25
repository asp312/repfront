import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';
import { DATA_PER_PAGE } from './constants';


function App() {
    const [listToShow, setList] = useState([]);
    const [amountOfUsers, setAmountOfUsers] = useState(0);
    const [searchString, setSearchString] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

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
            await fetch(`http://localhost:3001/users`)
                .then(res => res.json())
                .then(dataInJSON => setAmountOfUsers(dataInJSON.length));

            await fetch(`http://localhost:3001/users?_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON))
        }

        fetchData();
    }, []);

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
            <Route path="/user/:id" render={() => (<UserInfo list={listToShow} setList={setList} />)} />
        </Switch>
    )
}

export default App;

/*
    TODO:
        1) Не показывать пагинацию, когда на странице менее и равно 10 пользователям
        2) Добавить еще одну колонку в таблицу, в которой будет иконка на измение
        2.1) На иконку повесить событие клика, при срабатывании которого в инпуты будут подставляться значения выбранной сущности
        2.2) Рядом с кнопкой Add Element добавить кнопку Change Element, на которой будет обработчик onClick, который будет
            отправлять PUT запрос на изменение пользователя
 */
