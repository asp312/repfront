import React, { useCallback } from 'react';
import PropTypes from 'prop-types';


export const Input = ({ onChange, value, placeholder }) => {
    const handleInputChange = useCallback((e) => {
        onChange(e.target.value);
    }, []);

    return (
        <input type="text" value={value} onChange={handleInputChange} placeholder={placeholder}/>
    )
};

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string
};

