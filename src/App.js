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

  return (
      <>
        <Title title={'First app'} />
        <List itemList={list} />
        <Button text={'Click me'} onClick={() => addItemToList('Element 999')} />
      </>
  );
}

export default App;
