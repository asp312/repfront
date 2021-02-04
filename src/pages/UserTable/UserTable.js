import React, { useCallback, useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import { Button, Input, Table, Title, SearchInput } from '../../components';
import { DATA_PER_PAGE, MODAL_NAME } from '../../constants';
import { ModalContext } from '../../context/ModalContext';
import { CreateList } from '../../context/CreateList';
import {addUserList} from '../../ducks/user';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginLeft: '-20px',
        width: 520
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Wrapper = styled(Box)({
    width: '1120px',
    margin: '30px auto',
});
const InputWrapper = styled(Box)({
    width: '560px',
    margin: '30px 45%',
});
const ButtonWrapper = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '20px',
    width: '400px',
    margin: '30px 35%',
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


const UserTable = ({
    searchString,
    setSearchString,
    currentPage,
    setCurrentPage,
    amountOfUser,
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { setModalName } = useContext(ModalContext);

    const {
        pageTitle, isTitleEmpty
    } = useSelector((state) => ({
        pageTitle: state.userReducer.users,
        isTitleEmpty: !state.userReducer.someValue,
    }), shallowEqual);

    const countOfPages = Math.round(amountOfUser / DATA_PER_PAGE);
    const {list, setList} = useContext(CreateList);
    const [userToAdd, setUserToAdd] = useState({
        name: '',
        username: '',
        age: '',
        sex: '',
        email: '',
        address: '',
        phone: '',
        website:'',
        company: ''
    });

    const isAddButtonDisabled = !userToAdd.name || !userToAdd.username || !userToAdd.age || !userToAdd.sex;

    const isListEmpty = list.length === 0;
    const userEnough = list.length <= 10;

    const addItemToList = useCallback(() => {
        fetch('http://localhost:3001/users/', {
            method: 'POST',
            body: JSON.stringify(userToAdd),
            // В заголовке явно указываем, что в теле запроса лежит JSON формат
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            // После удачного запроса в теле ответа будет лежать обьект созданного пользователя
            // с новым присвоенным id -> добавляем его в наше состояние list
            .then(userInfo => {
                setUserToAdd({
                    name: '',
                    username: '',
                    age: '',
                    sex: '',
                    email: '',
                    address: '',
                    phone: '',
                    website:'',
                    company: ''
                });
                setList([...list, userInfo]);
                setModalName(MODAL_NAME.SUCCESS_MODAL);
            })
            // Отлавливаем ошибку
            .catch(err => {
                console.error(err)
                setModalName(MODAL_NAME.FAILURE_MODAL);
            });

    }, [userToAdd, list, setList, setModalName]);

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

    const handleChangePage = useCallback((e, page) => {
        setCurrentPage(page);
    }, []);

    const changeItemInList = useCallback(() => {
        fetch(`http://localhost:3001/users/${userToAdd.id}`, {
            method: 'PUT',
            body: JSON.stringify(userToAdd),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            const filteredUserList = list.filter(user => user.id !== userToAdd.id);

            setList([...filteredUserList, userToAdd]);

            setUserToAdd({
                name: '',
                username: '',
                age: '',
                sex: '',
                email: '',
                address: '',
                phone: '',
                website:'',
                company: ''
            });
        })
    }, [userToAdd]);

    const handleChangeTitle = useCallback(
        () => dispatch(addUserList(list)),
        []
    );

    return (
        <Wrapper>
            <Paper elevation={3} className = "item4">
                <h1>{pageTitle}</h1>
                {
                    isTitleEmpty && (
                        <button onClick={handleChangeTitle}>Change title</button>
                    )
                }
                <Title title={'First app'}/>
                <InputWrapper>
                    <SearchInput
                        placeholder={'Найти'}
                        name={'searching'}
                        label={'Searching'}
                        type={'text'}
                        value={searchString}
                        onChange={setSearchString}
                    />
                </InputWrapper>
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
                        value={userToAdd.username}
                        onChange={prepareUserToAdd}
                        placeholder={'Петров'}
                        name={'username'}
                        label={'Username'}
                        type={'text'}
                    />
                    <Input
                        value={userToAdd.email}
                        onChange={prepareUserToAdd}
                        placeholder={'@mail'}
                        name={'email'}
                        label={'Email'}
                        type={'text'}
                    />
                    <Input
                        value={userToAdd.address}
                        onChange={prepareUserToAdd}
                        placeholder={'Mos'}
                        name={'address'}
                        label={'Address'}
                        type={'text'}
                    />
                    <Input
                        value={userToAdd.phone}
                        onChange={prepareUserToAdd}
                        placeholder={'+7(987)6543210'}
                        name={'phone'}
                        label={'Phone'}
                        type={'number'}
                    />
                    <Input
                        value={userToAdd.website}
                        onChange={prepareUserToAdd}
                        placeholder={'http'}
                        name={'website'}
                        label={'Website'}
                        type={'text'}
                    />
                    <Input
                        value={userToAdd.company}
                        onChange={prepareUserToAdd}
                        placeholder={'OAO'}
                        name={'company'}
                        label={'Company'}
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
                    <Button
                        text={'Change Element'}
                        onClick={() => changeItemInList()}
                        disabled={isAddButtonDisabled}
                    />
                </ButtonWrapper>
                {
                    !isListEmpty && (
                        <Table arr={list} changeItem={setUserToAdd} />
                    )
                }
                {
                    !userEnough && (
                        <Pagination
                            count={countOfPages}
                            onChange={handleChangePage}
                            page={currentPage}
                            color={'primary'}
                        />
                    )
                }
            </Paper>
        </Wrapper>
    );
};

export default UserTable;
