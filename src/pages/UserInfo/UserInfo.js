import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';


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
    background: "url('pic/4_01.jpg')"
});

const TypWrapper = styled(Box)({
    marginLeft: '40%',
});

function UserInfo() {
    // Получаем параметры из адресной строки
    const params = useParams();

    return (
        <Paper elevation={3} className = "secondPaper">
            <TypWrapper>
                <Typography variant="h4" component="h1">Список друзей</Typography>
                <Typography variant="h6" component="h2">Страница Петра Петрова</Typography>
            </TypWrapper>
            <GridWrapper>
                <Wrapper></Wrapper>
                <Wrapper>
                    <List>
                        <ListItem>Имя: Пётр</ListItem>
                        <ListItem>Фамилия: Петров</ListItem>
                        <ListItem>Пол: Мужской</ListItem>
                        <ListItem>Возраст: 31</ListItem>
                    </List>
                </Wrapper>
            </GridWrapper>
        </Paper>
    )
}


export default UserInfo;
