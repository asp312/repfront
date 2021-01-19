import React, { useState, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Title, Input, Table } from './components';
import { makeStyles, styled } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import './style.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginLeft: '-20px',
      width: 520
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

//const useStyles = makeStyles({
    //item3: {
       // width: '1100px',
       // margin: '0 auto',
   // }
//});

const Wrapper = styled(Box)({
    width: '1100px',
    margin: '0 auto',
});
const ButtonWrapper = styled(Box)({
    width: '300px',
    margin: '30px 43.5%',
});
const SelectWrapper = styled(Box)({
        marginLeft: '20px'
});

const GridWrapper = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '20px',
    rowGap: '20px',
    width: '1000px',
    marginLeft: '60px'
});


function App() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const listFromLocalStorage = JSON.parse(localStorage.getItem('list'));

  if (listFromLocalStorage) {
      setList(listFromLocalStorage);
  }
    /**
     *  1. Проверить есть ли list в localStorage
     *  2. Если есть, то положить его в состояние через setList
     *  3. При добавлении нового пользователя перезаписать list в localStorage
     */
  const [userToAdd, setUserToAdd] = useState({
      name: '',
      surname: '',
      age: '',
      sex: '',
  });

  const isAddButtonDisabled = !userToAdd.name || !userToAdd.surname || !userToAdd.age || !userToAdd.sex;

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

  const prepareUserToAdd = useCallback((value) => {
      setUserToAdd(prevState => ({
          ...prevState,
          ...value
      }))
  }, [userToAdd]);

  const handleSelectChange = useCallback((e) => {
      setUserToAdd(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }, [userToAdd]);

  return (
        <Wrapper>
            <Paper elevation={3} className = "item4">
            <Title title={'First app'}/>
            <GridWrapper>
                <Input
                    value={userToAdd.name}
                    onChange={prepareUserToAdd}
                    placeholder={'Пётр'}
                    name={'name'}
                    label={'Name'}
                    type={'text'}
                />
                <Input
                    value={userToAdd.surname}
                    onChange={prepareUserToAdd}
                    placeholder={'Петров'}
                    name={'surname'}
                    label={'Surname'}
                    type={'text'}
                />
                 <Input
                    value={userToAdd.age}
                    onChange={prepareUserToAdd}
                    placeholder={'1'}
                    name={'age'}
                    label={'Age'}
                    type={'number'}
                />
                <SelectWrapper>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label" >Sex</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={userToAdd.sex}
                        name={'sex'}
                        onChange={handleSelectChange}
                        label={'Sex'}
                    >
                        <MenuItem value="Men">Men</MenuItem>
                        <MenuItem value="Women">Women</MenuItem>
                        <MenuItem value="Robot">Robot</MenuItem>
                    </Select>
                </FormControl>
                </SelectWrapper>
            </GridWrapper>
            <ButtonWrapper>
                <Button
                    text={'Add element'}
                    onClick={() => addItemToList()}
                    disabled={isAddButtonDisabled}
                />
             </ButtonWrapper>
            {
                !isListEmpty && (
                    <Table arr={list} />
                )
            }
            </Paper>
        </Wrapper>
  );
}

export default App;

/*
    TODO:
        1. Заменить Input на TextArea
        2. Сделать Select и TextArea одной ширины
        3. Сделать кнопку более широкой, чтобы текст не переносился
        4. Стилизовать компоненты через makeStyles() или styled(). Заменить названия классов на более читаемые
        5. Сверстать вторую страницу
        6. Добавить в валидацию кнопки проверку на Select (что значение выбрано)
        7. Сделать инпут Age числовым (добавить пропс type к компоненту Input и прокинуть его в ExternalInput)
        8* При добавлении пользователя класть list в localStorage,
            при наличии поля list в localStorage считывать его в компоненте. Не забыть про JSON.parse(), JSON.stringify()
 */
