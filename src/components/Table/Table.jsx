import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

export const Table = ({arr}) => {
    return (
        <table className = "table">
            <TableHead>
                <tr>
                    <TableCell align = {'center'}>Name</TableCell>
                    <TableCell align = {'center'}>Surname</TableCell>
                    <TableCell align = {'center'}>Age</TableCell>
                    <TableCell align = {'center'}>Sex</TableCell>
                </tr>
            </TableHead>
            <TableBody>
                {
                    arr.map((item) => (
                        <tr key={item.name}>
                            <TableCell align = {'center'}>{item.name}</TableCell>
                            <TableCell align = {'center'}>{item.surname}</TableCell>
                            <TableCell align = {'center'}>{item.age}</TableCell>
                            <TableCell align = {'center'}>{item.sex}</TableCell>
                        </tr>
                    ))
                }
            </TableBody>
        </table>
    )
}

Table.propTypes = {
    arr: PropTypes.array,
    item: PropTypes.string
};
