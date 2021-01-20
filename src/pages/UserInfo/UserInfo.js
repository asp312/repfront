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

    '&:first-child': {
        background: "url('/images/4_01.jpg') center no-repeat",
        backgroundSize: 'contain',
    }
});

const TypWrapper = styled(Box)({
    marginLeft: '40%',
});

function UserInfo({list}) {
    // Получаем параметры из адресной строки преобразованные в строку
    const params = useParams();

    const item = list.find((user) => {
       return user.id === +params.id;
    });

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
                        <ListItem>{item.name}</ListItem>
                        <ListItem>{item.surname}</ListItem>
                        <ListItem>{item.sex}</ListItem>
                        <ListItem>{item.age}</ListItem>
                    </List>
                </Wrapper>
            </GridWrapper>
        </Paper>
    )
};


export default UserInfo;
