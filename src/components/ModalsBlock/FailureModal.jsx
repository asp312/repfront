import React from 'react';
import Modal from '@material-ui/core/Modal';

import { Button } from '../';
import { ModalContentWrap, ButtonContentWrap } from './styled';


export const FailureModal = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalContentWrap>
                <h1>Failure modal</h1>
                <h2>Запрос отклонен, повторите попытку позже</h2>
                <ButtonContentWrap>
                    <Button  text={'Close modal'} onClick={onClose}/>
                </ButtonContentWrap>
            </ModalContentWrap>
        </Modal>
    )
};
