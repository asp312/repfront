import React, { useCallback, useContext } from 'react';

import { FailureModal } from './FailureModal';
import { SuccessModal } from './SuccesModal';
import {MODAL_NAME} from '../../constants';
import { ModalContext } from '../../context/ModalContext';


export const ModalBlock = () => {
    const { modalName, setModalName } = useContext(ModalContext);

    const isSuccessModalOpen = modalName === MODAL_NAME.SUCCESS_MODAL;
    const isFailureModalOpen = modalName === MODAL_NAME.FAILURE_MODAL;

    const handleCloseModal = useCallback(
        () => setModalName(''),
        [],
    );

    return (
        <>
            {
                isSuccessModalOpen && (
                    <SuccessModal
                        isOpen={true}
                        onClose={handleCloseModal}
                    />
                )
            }
            {
                isFailureModalOpen && (
                    <FailureModal
                        isOpen={true}
                        onClose={handleCloseModal}
                    />
                )
            }
        </>
    )
}
