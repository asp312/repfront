import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({arr}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

Table.propTypes = {
    arr: PropTypes.array,
    item: PropTypes.string
};
