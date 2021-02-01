import { Box, styled } from '@material-ui/core';

export const ModalContentWrap = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: '100px auto 0 auto',
    width: '50%',
    boxSizing: 'border-box',
    border: 'none',
    padding: '25px'
});
export const ButtonContentWrap = styled(Box)({
    marginTop: '20px'
})
export const ButtonChoisetWrap = styled(Box)({
    display: 'grid',
    gridColumn: '1fr 1fr',
    columnGap: '40px'
})
