import React from 'react';
import PropTypes from 'prop-types';


export const List = ({ itemList }) => (
    <ul>
        {
            itemList.map((item) => (
                <li key={item}>{item}</li>
            ))
        }
    </ul>
);

List.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.string)
}
