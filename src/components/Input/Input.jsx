import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ExternaInput from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export const Input = ({ onChange, value, placeholder, name, label, className, type}) => {
    const handleInputChange = useCallback((e) => {
        const inputData = {
            [e.target.name]: e.target.value
        };

        onChange(inputData);
    }, []);

    return (
        
        <TextField
            className = {className}
            type="text"
            value={value}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder}
            id="outlined-helperText"
            label={label}
            variant="outlined"
            type={type}
        />
    )
};

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

