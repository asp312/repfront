import React, {useCallback, useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core';
import {Button, ModalBlock} from '../../components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import { CreateList } from '../../context/CreateList';
import {MODAL_NAME} from '../../constants';
import { ModalContext } from '../../context/ModalContext';
import { useSelector, useDispatch } from 'react-redux';
import { setModalName } from '../../ducks/modal';


const GridWrapper = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '20px',
    rowGap: '20px',
    width: '1000px',
    marginLeft: '130px',
    marginTop: '50px'
});
const Wrapper = styled(Box)({
    width: '400px',
    margin: '0 auto',

    '&:first-child': {
        background: "url('/images/4_01.jpg') center no-repeat",
        backgroundSize: 'contain',
    }
});

const TypWrapper = styled(Box)({
    marginLeft: '40%',
});

function UserInfo() {
    const params = useParams();
    const dispatch = useDispatch();

    const { selectedUser } = useSelector((state) => ({
        selectedUser: state.userReducer.userList.find((user) => {
            return user.id === +params.id;
        })
    }));

    const handleOpenSuccessModal = useCallback(
        () => dispatch(setModalName(MODAL_NAME.SUCCESS_MODAL)),
        [],
    );
    const handleOpenChoiceModal = useCallback(
        () => dispatch(setModalName(MODAL_NAME.CHOICE_MODAL)),
        [],
    );

    if (!selectedUser) {
        return <h5>Loading</h5>
    }

    return (
        <>
        <ModalBlock />
        <Paper elevation={3} className = "secondPaper">
            <TypWrapper>
                <Typography variant="h4" component="h1">Список друзей</Typography>
                <Typography variant="h6" component="h2">Страница Петра Петрова</Typography>
            </TypWrapper>
            <GridWrapper>
                <Wrapper></Wrapper>
                <Wrapper>
                    <List>
                        <ListItem>Name: {selectedUser.name}</ListItem>
                        <ListItem>Userame: {selectedUser.username}</ListItem>
                        <ListItem>EMAIL: {selectedUser.email}</ListItem>
                        <ListItem>address: {selectedUser.address}</ListItem>
                        <ListItem>phone: {selectedUser.phone}</ListItem>
                        <ListItem>website: {selectedUser.website}</ListItem>
                        <ListItem>company: {selectedUser.company}</ListItem>
                        <ListItem>sex: {selectedUser.sex}</ListItem>
                        <ListItem>age: {selectedUser.age}</ListItem>
                    </List>
                </Wrapper>
            </GridWrapper>
            <Button  text={'Go to homepage'} onClick={handleOpenChoiceModal}/>
            <Button  text={'Open success modal'} onClick={handleOpenSuccessModal}/>
        </Paper>
        </>
    )
};


export default UserInfo;
