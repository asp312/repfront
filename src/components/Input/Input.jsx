import React, { useCallback } from 'react';
import PropTypes from 'prop-types';


export const Input = ({ onChange, value }) => {
    const handleInputChange = useCallback((e) => {
        onChange(e.target.value);
    }, []);

    return (
        <input type="text" value={value} onChange={handleInputChange} />
    )
};

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

