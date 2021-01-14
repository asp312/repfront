import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({arr}) => {
    return (
        <table>
            { 
            arr.map((item) => ( 
            <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
            </tr>
            ))
            } 
        </table>
    )
}

Input.propTypes = {
    arr: PropTypes.array,
    item: PropTypes.string
};