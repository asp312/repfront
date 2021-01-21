import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {
    const [list, setList] = useState([]);

    // Получение/сохранение данных в localStorage
    // useEffect(() => {
    //     const listFromLocalStorage = JSON.parse(localStorage.getItem('list'));
    //     setList(listFromLocalStorage);
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('list', JSON.stringify(list));
    // }, [list]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:3001/users')
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));
        }

        fetchData();
    }, []);

    console.log(list);

    return (
        <Switch>
            <Route exact path="/" render={() => (<UserTable list={list} setList={setList}/>)}/>
            <Route path="/user/:id" render={() => (<UserInfo list={list}/>)} />
        </Switch>
    )
}

export default App;

/*
    TODO:
        1) Удалить колонку Surname
        1.1) Добавить колонки username, email, address, phone, website, company
        1.2) Добавить новые элементы списка в компонент UserInfo
        2) Функция отправки POST запроса на добавление нового пользователя
 */
