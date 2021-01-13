import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({ text, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled}>{text}</button>
)

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}
