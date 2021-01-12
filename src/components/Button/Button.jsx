import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
)

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}
