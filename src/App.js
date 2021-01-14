import React, { useState, useCallback } from 'react';

import './style.css';
import { Button, Title, Input, Table } from './components';


function App() {
  const [list, setList] = useState([]);
  const [userToAdd, setUserToAdd] = useState({
      name: '',
      surname: ''
  });

  console.log(userToAdd);

  // const [nameToAdd, setNameToAdd] = useState('');
  // const [surnameToAdd, setSurnameToAdd] = useState('');

  // function createObj(myName, surname) {
  //     this.name = myName;
  //     this.surname = surname;
  // };
  //
  // const obj =  new createObj(nameToAdd, surnameToAdd);

  const isAddButtonDisabled = !userToAdd.name && !userToAdd.surname;

  const isListEmpty = list.length === 0;

  const addItemToList = useCallback(() => {
      setList([...list, userToAdd]);
      setUserToAdd({
          name: '',
          surname: ''
      });
  }, [userToAdd]);

  const removeItemFromList = useCallback(() => {
      setList([...list.slice(0, -1)]);
  }, []);

  // const prepareNameToAdd = useCallback((valueToAdd) => {
  //     setNameToAdd(valueToAdd);
  // }, []);
  //
  //   const prepareSurnameToAdd = useCallback((valueToAdd) => {
  //       setSurnameToAdd(valueToAdd);
  //   }, []);
  //

    /**
     * value -> { name: 'asdasdasdasdasdada' } || { surname: 'adfasdfadsf' }
     */
  const prepareUserToAdd = useCallback((value) => {
      setUserToAdd(prevState => ({
          ...prevState,
          ...value
      }))
  }, [userToAdd]);

  return (
      <>
        <Title title={'First app'} />
        <Input
            value={userToAdd.name}
            onChange={prepareUserToAdd}
            placeholder={'Name'}
            name={'name'}
        />
        <Input
            value={userToAdd.surname}
            onChange={prepareUserToAdd}
            placeholder={'Surname'}
            name={'surname'}
        />
        <Button
            text={'Add element'}
            onClick={() => addItemToList()}
            disabled={isAddButtonDisabled}
        />
        {
            !isListEmpty && (
                <Table arr={list}/>
            )
        }
      </>
  );
}

export default App;

/*
    TODO:
        1. Добавить еще один инпут для ввода фамилии
        1.1. В компоненте Input добавить пропс placeholder (не забыть про типизацию)
        2. Убрать кнопку удаления
        3. Создать компонент таблицы, которая принимает на вход массив обьектами [{ name: 'name', surname: 'surname'}, ...]
        4. При нажатии на кнопку Add добавлять в общий список нового пользователя -> рендерить новую строку в таблице
        5. Если список пользователей пуст, то таблицу не выводить
 */
