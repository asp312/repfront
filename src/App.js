import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router';
import './style.css';
import { CreateList } from './context/CreateList';
import { ModalContext } from './context/ModalContext';
import UserTable from './pages/UserTable/UserTable';
import UserInfo from './pages/UserInfo/UserInfo';
import { DATA_PER_PAGE } from './constants';
import { ModalBlock } from './components';
import { fetchUsersData } from './ducks/user';
import { useDispatch } from 'react-redux';


function App() {
    const [listToShow, setList] = useState([]);
    const [amountOfUsers, setAmountOfUsers] = useState(0);
    const [searchString, setSearchString] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    // Состояние для модальных окон
    const [modalName, setModalName] = useState('');

    const location = useLocation();
    const dispatch = useDispatch();

    // Поиск на стороне сервера
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:3001/users?q=${searchString}&_page=${currentPage}&_limit=${DATA_PER_PAGE}`)
                .then(res => res.json())
                .then(dataInJSON => setList(dataInJSON));

        }

        fetchData();
    }, [searchString, currentPage]);


    /**
     * TODO:
     *  1. Сделать асинхронный экшен, который будет получать данные о пользователях и класть их в хранилище
     *  2. Считать данные о пользователях из хранилища и отрисовать в таблице
     */
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

        dispatch(fetchUsersData());
    }, [location.pathname]);

    return (
        <CreateList.Provider value={{ list:listToShow, setList }}>
            <ModalContext.Provider value={{ modalName, setModalName }}>
                <ModalBlock />
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
                            <UserInfo/>
                        )}
                    />
                </Switch>
            </ModalContext.Provider>
        </CreateList.Provider>
    )
}

export default App;

/*
    TODO:
       1) Оформить модальные окна SuccessModal и FailureModal (заголовок, тело сообщения, кнопка)
       2) Добавить модальное окно для подтвержения удаления пользователя с двумя кнопками: Отмена и Подтвердить
        2.1) При нажатии на Отмена - модалка закрывается
        2.2) При нажатии на Подтвердить - запрос на удаление уходит на сервер
        2.3) В случае, если запрос завершился с ошибкой в блоке catch вызывать функцию setModalName(MODAl_NAME.FAILURE_MODAL)
        2.4) Не забыть, что setModalName хранится в контексте ModalContext
 */
