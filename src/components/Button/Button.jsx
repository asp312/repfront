import React from 'react';
import PropTypes from 'prop-types';
import ExternalButton from '@material-ui/core/Button';


export const Button = ({ text, onClick, disabled, className }) => (
        <ExternalButton
            onClick={onClick}
            disabled={disabled}
            color="secondary"
            className={className}
        >
            {text}
        </ExternalButton>
)

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}
