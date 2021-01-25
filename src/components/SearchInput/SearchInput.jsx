import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export const SearchInput = ({ onChange, value, placeholder, name, label, className, type}) => {
    const classes = useStyles();

    const handleInputChange = useCallback((e) => {
        onChange(e.target.value);
    }, []);

    return (

        <TextField
            className={cn(className, classes.root)}
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

SearchInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};
