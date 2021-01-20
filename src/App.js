import React from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {

    return (
        <Switch>
            <Route exact path="/" render={() => (<UserTable />)}/>
            <Route path="/user/:id" render={() => (<UserInfo />)} />
        </Switch>
    )
}

export default App;

/*
    TODO:
        1) При добавлении пользователя класть list в localStorage,
            при наличии поля list в localStorage считывать его в компоненте. Не забыть про JSON.parse(), JSON.stringify()
        2) В компоненте UserInfo по id пользователя, полученному из адресной строки найти пользователя в массиве list
            и отобразить по нему информацию
 */
