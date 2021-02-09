import React, { useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FailureModal } from './FailureModal';
import { SuccessModal } from './SuccesModal';
import { ChoiceModal } from './ChoiceModal';
import {MODAL_NAME} from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, setModalName } from '../../ducks/modal';


export const ModalBlock = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const {
        isSuccessModalOpen,
        isFailureModalOpen,
        isChoiceModalOpen
    } = useSelector((state) => ({
        isSuccessModalOpen: state.modalReducer === MODAL_NAME.SUCCESS_MODAL,
        isFailureModalOpen: state.modalReducer === MODAL_NAME.FAILURE_MODAL,
        isChoiceModalOpen: state.modalReducer === MODAL_NAME.CHOICE_MODAL
    }));

    useEffect(() => {

    }, [params]);

    const handleCloseModal = useCallback(
        () => dispatch(resetState()),
        [],
    );

    const handleButtonClick = useCallback(() => {
        fetch(`http://localhost:3001/users/${params.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                dispatch(resetState());
                history.push('/');
            })
            .catch(err => {
                console.error(err)
                dispatch(setModalName(MODAL_NAME.FAILURE_MODAL));
            });

    }, [params, setModalName, history]);


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
