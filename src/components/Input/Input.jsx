import React, { useCallback } from 'react';
import PropTypes from 'prop-types';


export const Input = ({ onChange, value, placeholder, name }) => {
    const handleInputChange = useCallback((e) => {
        const inputData = {
            [e.target.name]: e.target.value
        };

        onChange(inputData);
    }, []);

    return (
        <input
            type="text"
            value={value}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder}
        />
    )
};

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

