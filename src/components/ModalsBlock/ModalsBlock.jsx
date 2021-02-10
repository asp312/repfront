import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FailureModal } from './FailureModal';
import { SuccessModal } from './SuccesModal';
import { ChoiceModal } from './ChoiceModal';
import {MODAL_NAME} from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../ducks/modal';
import { deleteUser, fetchUserList } from '../../ducks/user';
import { useHistory } from 'react-router-dom';

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
        dispatch(deleteUser(params));
        history.push('/');
        dispatch(fetchUserList());
    }, []);


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
