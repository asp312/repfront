import React from 'react';
import Modal from '@material-ui/core/Modal';

import { Button } from '../';
import { ModalContentWrap, ButtonChoisetWrap } from './styled';

export const ChoiceModal = ({ isOpen, onClose, onAccept }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalContentWrap>
                <h1>Вы  уверены?</h1>
                <h2>Подвердите действие</h2>
                <ButtonChoisetWrap>
                    <Button  text={'Подтвердить'} onClick={onAccept}/>
                    <Button  text={'Отменить'} onClick={onClose}/>
                </ButtonChoisetWrap>
            </ModalContentWrap>
        </Modal>
    )
}