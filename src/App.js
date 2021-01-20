import React, {useState} from 'react';
import { Switch, Route } from 'react-router';
import './style.css';

import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';


function App() {
    const [list, setList] = useState([]);

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
        1) При добавлении пользователя класть list в localStorage,
            при наличии поля list в localStorage считывать его в компоненте. Не забыть про JSON.parse(), JSON.stringify()
 */
