import React, { useState, useCallback } from 'react';

import './style.css';
import { Button, Title, Input, Table } from './components';


function App() {
  const [list, setList] = useState([]);
  const [nameToAdd, setNameToAdd] = useState('');
  const [surnameToAdd, setSurnameToAdd] = useState('');

  function createObj(myName, surname) {
      this.name = myName;
      this.surname = surname;
  };

  const obj =  new createObj(nameToAdd, surnameToAdd);

  const isAddButtonDisabled = !nameToAdd && !surnameToAdd;

  const isListEmpty = list.length === 0;

  const addItemToList = useCallback(() => {
      const userToAdd = {
          name: nameToAdd,
          surname: surnameToAdd
      };

      setList([...list, userToAdd]);
      setNameToAdd('');
      setSurnameToAdd('');
  }, [nameToAdd, surnameToAdd]);

  const removeItemFromList = useCallback(() => {
      setList([...list.slice(0, -1)]);
  }, []);

  const prepareNameToAdd = useCallback((valueToAdd) => {
      setNameToAdd(valueToAdd);
  }, []);

    const prepareSurnameToAdd = useCallback((valueToAdd) => {
        setSurnameToAdd(valueToAdd);
    }, []);

  return (
      <>
        <Title title={'First app'} />
        <Input value={nameToAdd} onChange={prepareNameToAdd} placeholder={'Name'}/>
        <Input value={surnameToAdd} onChange={prepareSurnameToAdd} placeholder={'Surname'}/>
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
