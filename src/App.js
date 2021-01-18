import React, { useState, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
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

  const isAddButtonDisabled = !userToAdd.name || !userToAdd.surname || !userToAdd.age;

  const isListEmpty = list.length === 0;

  const addItemToList = useCallback(() => {
      setList([...list, userToAdd]);
      setUserToAdd({
          name: '',
          surname: '',
          age: '',
          sex: '',
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
        <div className = "item3">
        <Paper elevation={3} className = "item4">
        <Title title={'First app'}/>
        <div className = "item1">
        <Input
            value={userToAdd.name}
            onChange={prepareUserToAdd}
            placeholder={'piter'}
            name={'name'}
            
        />
        <Input
            value={userToAdd.surname}
            onChange={prepareUserToAdd}
            placeholder={'Surname'}
            name={'surname'}
        />
         <Input
            value={userToAdd.age}
            onChange={prepareUserToAdd}
            placeholder={'Age'}
            name={'age'}
        />
        <div className = "item10">
        <InputLabel id="label" >Sex</InputLabel>
            <Select labelId="label" id="select" value="20" onChange={prepareUserToAdd}>
                <MenuItem value="M">Men</MenuItem>
                <MenuItem value="W">Women</MenuItem>
            </Select>
            </div>
        </div>
        <div className = "button">
        <Button
            text={'Add element'}
            onClick={() => addItemToList()}
            disabled={isAddButtonDisabled}
        />
         </div>
        {
            !isListEmpty && (
                <Table arr={list} />
            )
        }
        </Paper>
        </div>
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
