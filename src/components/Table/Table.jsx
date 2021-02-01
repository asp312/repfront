import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import ExternalButton from '@material-ui/core/Button';


export const Table = ({ arr, changeItem }) => {
    const handleChangeItem = useCallback((item) =>  () =>{
        changeItem(item);
    }, []);

    return (
        <table className = "table">
            <TableHead>
                <TableRow>
                    <TableCell align = {'center'}>ID</TableCell>
                    <TableCell align = {'center'}>Name</TableCell>
                    <TableCell align = {'center'}>Username</TableCell>
                    <TableCell align = {'center'}>Email</TableCell>
                    <TableCell align = {'center'}>Address</TableCell>
                    <TableCell align = {'center'}>Phone</TableCell>
                    <TableCell align = {'center'}>Website</TableCell>
                    <TableCell align = {'center'}>Company</TableCell>
                    <TableCell align = {'center'}>Age</TableCell>
                    <TableCell align = {'center'}>Sex</TableCell>
                    <TableCell align = {'center'}>Change</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    arr.map((item) => (
                        <TableRow key={item.id}>
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
                            <TableCell align = {'center'}>
                                <ExternalButton onClick={handleChangeItem(item)}>
                                    <CreateIcon />
                                </ExternalButton>
                            </TableCell>
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

