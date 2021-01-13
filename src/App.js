import React, { useState, useCallback } from 'react';

import './style.css';
import { Button, List, Title, Input } from './components';


function App() {
  const [list, setList] = useState([]);
  const [itemToAdd, setItemToAdd] = useState('');

    /**
     * '' -> true
     * 'str' -> false
     */
  const isAddButtonDisabled = !itemToAdd;

  const isListEmpty = list.length === 0;

  const addItemToList = useCallback((item) => {
      setList([...list, {}]);
      setItemToAdd('');
  }, []);

  const removeItemFromList = useCallback(() => {
      setList([...list.slice(0, -1)]);
  }, []);

  const prepareItemToAdd = useCallback((valueToAdd) => {
      setItemToAdd(valueToAdd);
  }, []);

  return (
      <>
        <Title title={'First app'} />
        <List itemList={list} />
        <Input value={itemToAdd} onChange={prepareItemToAdd} />
        <Button
            text={'Add element'}
            onClick={() => addItemToList(itemToAdd)}
            disabled={isAddButtonDisabled}
        />
        <Button text={'Remove element'} onClick={() => removeItemFromList()} />
        {
            !isListEmpty && (
                <Table />
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
