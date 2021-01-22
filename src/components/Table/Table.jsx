import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';


export const Table = ({arr}) => {
    return (
        <table className = "table">
            <TableHead>
                <TableRow>
                    <TableCell align = {'center'}>ID</TableCell>
                    <TableCell align = {'center'}>Name</TableCell>
                    <TableCell align = {'center'}>username</TableCell>
                    <TableCell align = {'center'}>email</TableCell>
                    <TableCell align = {'center'}>address</TableCell>
                    <TableCell align = {'center'}>phone</TableCell>
                    <TableCell align = {'center'}>website</TableCell>
                    <TableCell align = {'center'}>company</TableCell>
                    <TableCell align = {'center'}>Age</TableCell>
                    <TableCell align = {'center'}>Sex</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    arr.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell align = {'center'}>
                                <Link to={`/user/${item.id}`}>{item.id}</Link>
                            </TableCell>
                            <TableCell align = {'center'}>{item.name}</TableCell>
                            <TableCell align = {'center'}>{item.username}</TableCell>
                            <TableCell align = {'center'}>{item.email}</TableCell>
                            <TableCell align = {'center'}>{item.address}</TableCell>
                            <TableCell align = {'center'}>{item.phone}</TableCell>
                            <TableCell align = {'center'}>{item.website}</TableCell>
                            <TableCell align = {'center'}>{item.company}</TableCell>
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
