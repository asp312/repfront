import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {
    return (
            <Switch>
                <Route exact path="/" component={UserTable} />
                <Route path="/user" component={UserInfo} />
            </Switch>
    )
}

export default App;

/*
    TODO:
        8* При добавлении пользователя класть list в localStorage,
            при наличии поля list в localStorage считывать его в компоненте. Не забыть про JSON.parse(), JSON.stringify()
 */
