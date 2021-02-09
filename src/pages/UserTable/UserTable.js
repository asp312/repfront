import React, { useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Input, Table, Title, SearchInput } from '../../components';
import { DATA_PER_PAGE } from '../../constants';
import {fetchUserList, setCurrentPage, addUserToList, changeUserField, updateUserInfo} from '../../ducks/user';



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
    display: 'flex',
    justifyContent: 'center',
    width: '560px',
    marginTop: '30px',
    marginBottom: '30px',
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
});


const UserTable = ({
    searchString,
    setSearchString,
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {
        userList,
        isFetching,
        isError,
        amountOfUsers,
        currentPage,
        isListEmpty,
        shouldShowPagination
    } = useSelector((state) => ({
        userList: state.userReducer.userList,
        amountOfUsers: state.userReducer.amountOfUsers,
        currentPage: state.userReducer.currentPage,
        isListEmpty: state.userReducer.amountOfUsers === 0,
        shouldShowPagination: state.userReducer.amountOfUsers > 10,
        isFetching: state.userReducer.isFetching,
        isError: state.userReducer.isError,
    }));

    const countOfPages = Math.round(amountOfUsers / DATA_PER_PAGE);

    const {
        userToAdd
    } = useSelector((state) => ({
        userToAdd: state.userReducer.userToAdd
    }));

    const isAddButtonDisabled = !userToAdd.name || !userToAdd.username || !userToAdd.age || !userToAdd.sex;

    const prepareUserToAdd = useCallback((value) => {
        dispatch(changeUserField(value));
    }, [userToAdd]);

    const prepareUserToUpdate = useCallback((userToUpdate) => {
        dispatch(changeUserField(userToUpdate));
    }, []);

    const handleSelectChange = useCallback((e) => {
        dispatch(changeUserField({
            [e.target.name]: e.target.value
        }));
    }, [userToAdd]);

    const handleChangePage = useCallback((e, page) => {
        dispatch(setCurrentPage(page));
    }, []);

    const changeItemInList = useCallback(() => {
        dispatch(updateUserInfo());
    }, [userToAdd]);

    return (
        <Wrapper>
            <Paper elevation={3} className = "item4">
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
                        onClick={() => dispatch(addUserToList())}
                        disabled={isAddButtonDisabled}
                    />
                    <Button
                        text={'Change Element'}
                        onClick={() => changeItemInList()}
                        disabled={isAddButtonDisabled}
                    />
                </ButtonWrapper>
                {
                    isFetching && (
                        <CircularProgress />
                    )
                }
                {
                    isError && (
                        <Alert severity="error">Error while fetching user list. Please try again.</Alert>
                    )
                }
                {
                    !isListEmpty && (
                        <Table arr={userList} changeItem={prepareUserToUpdate} />
                    )
                }
                {
                    shouldShowPagination && (
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
