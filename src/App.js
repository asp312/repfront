import React, { useState } from 'react';

import './style.css';
import { Button, List, Title } from './components';


function App() {
  const itemList = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  // ['', '', ...]
  const [list, setList] = useState(itemList);

  console.log(list);

  const addItemToList = (item) => {
      setList([...list, item]);
  };
  const removeItemFromList = () => {
    setList(...list.splice(-1));
};

  return (
      <>
        <Title title={'First app'} />
        <List itemList={list} />
        <Button text={'Add element'} onClick={() => addItemToList('Element 999')} />
        <Button text={'Remove element'} onClick={() => removeItemFromList()} />
      </>
  );
}

export default App;

/*
    TODO:
        1. Добавить вторую кнопку Remove button, при клике на которую должен удаляться последний эелемент из списка
 */
