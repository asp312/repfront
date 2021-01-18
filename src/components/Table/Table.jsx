import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export const Table = ({arr}) => {
    return (
        <table className = "table">
            <TableHead>
                <TableRow>
                    <TableCell align = {'center'}>Name</TableCell>
                    <TableCell align = {'center'}>Surname</TableCell>
                    <TableCell align = {'center'}>Age</TableCell>
                    <TableCell align = {'center'}>Sex</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    arr.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell align = {'center'}>{item.name}</TableCell>
                            <TableCell align = {'center'}>{item.surname}</TableCell>
                            <TableCell align = {'center'}>{item.age}</TableCell>
                            <TableCell align = {'center'}>{item.sex}</TableCell>
                        </TableRow>
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
