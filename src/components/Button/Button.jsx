import React from 'react';
import PropTypes from 'prop-types';
import ExternalButton from '@material-ui/core/Button';


export const Button = ({ text, onClick, disabled }) => (
    <ExternalButton onClick={onClick} disabled={disabled}>{text}</ExternalButton>
)

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}
