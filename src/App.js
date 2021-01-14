import React, { useState, useCallback } from 'react';

import { Button, Title, Input, Table } from './components';
import './style.css';


function App() {
  const [list, setList] = useState([]);
  const [userToAdd, setUserToAdd] = useState({
      name: '',
      surname: ''
  });

  // const [nameToAdd, setNameToAdd] = useState('');
  // const [surnameToAdd, setSurnameToAdd] = useState('');

  // function createObj(myName, surname) {
  //     this.name = myName;
  //     this.surname = surname;
  // };
  //
  // const obj =  new createObj(nameToAdd, surnameToAdd);

  const isAddButtonDisabled = !userToAdd.name || !userToAdd.surname;

  const isListEmpty = list.length === 0;

  const addItemToList = useCallback(() => {
      setList([...list, userToAdd]);
      setUserToAdd({
          name: '',
          surname: '',
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
        1. Добавить два инпута: для возраста и пола
        1.1. Кнопка добавления должна быть активна только когда все поля заполнены
        2. Заменить все компоненты на компоненты из material-ui
        3. Выровнять содержимое по центру
 */
