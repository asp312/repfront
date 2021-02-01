import React, { useCallback, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FailureModal } from './FailureModal';
import { SuccessModal } from './SuccesModal';
import { ChoiceModal } from './ChoiceModal';
import { CreateList } from '../../context/CreateList';
import {MODAL_NAME} from '../../constants';
import { ModalContext } from '../../context/ModalContext';


export const ModalBlock = () => {
    const { modalName, setModalName } = useContext(ModalContext);
    const {list, setList} = useContext(CreateList);
    const isSuccessModalOpen = modalName === MODAL_NAME.SUCCESS_MODAL;
    const isFailureModalOpen = modalName === MODAL_NAME.FAILURE_MODAL;
    const isChoiceModalOpen = modalName === MODAL_NAME.CHOICE_MODAL;
    const history = useHistory();
    const params = useParams();

    useEffect(() => {

    }, [params]);

    const handleCloseModal = useCallback(
        () => setModalName(''),
        [],
    );

    const handleButtonClick = useCallback(() => {
        fetch(`http://localhost:3001/users/${params.id}`, {
            method: 'DELETE',
        })
            .then(() => history.push('/'))
            .catch(err => {
                console.error(err)
                setModalName(MODAL_NAME.FAILURE_MODAL);
            });

    }, [list, params]);


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
            {
                isChoiceModalOpen && (
                    <ChoiceModal
                        isOpen={true}
                        onClose={handleCloseModal}
                        onAccept={handleButtonClick}
                    />
                )
            }
        </>
    )
}
