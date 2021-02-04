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
    // Получаем параметры из адресной строки преобразованные в строку
    const {list, setList} = useContext(CreateList);
    const { setModalName } = useContext(ModalContext);

    const params = useParams();

    const handleOpenSuccessModal = useCallback(
        () => setModalName(MODAL_NAME.SUCCESS_MODAL),
        [],
    );
    const handleOpenChoiceModal = useCallback(
        () => setModalName(MODAL_NAME.CHOICE_MODAL),
        [],
    );

    const item = list.find((user) => {
       return user.id === +params.id;
    });

    if (!item) {
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
                        <ListItem>Name: {item.name}</ListItem>
                        <ListItem>Userame: {item.username}</ListItem>
                        <ListItem>EMAIL: {item.email}</ListItem>
                        <ListItem>address: {item.address}</ListItem>
                        <ListItem>phone: {item.phone}</ListItem>
                        <ListItem>website: {item.website}</ListItem>
                        <ListItem>company: {item.company}</ListItem>
                        <ListItem>sex: {item.sex}</ListItem>
                        <ListItem>age: {item.age}</ListItem>
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
