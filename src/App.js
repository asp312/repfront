import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:3001/users')
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));
        }

        fetchData();
    }, []);

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
        1) Дать пояснения к каждому элементу списка на странице UserInfo
        2) В компоненте UserInfo добавить кнопку удаления пользователя
        2.1) После отправки запроса на удаления нужно сделать редирект на главную страницу с помощью history.push()
 */
