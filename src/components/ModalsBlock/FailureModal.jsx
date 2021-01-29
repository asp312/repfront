import React from 'react';
import Modal from '@material-ui/core/Modal';

import { Button } from '../';
import { ModalContentWrap } from './styled';


export const FailureModal = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalContentWrap>
                <h1>Failure modal</h1>
                <Button  text={'Close modal'} onClick={onClose}/>
            </ModalContentWrap>
        </Modal>
    )
};
