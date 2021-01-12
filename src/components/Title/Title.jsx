import React from 'react';
import PropTypes from 'prop-types';


export const Title = ({ title = 'Second app' }) => (
    <h1>{title}</h1>
);

Title.propTypes = {
    title: PropTypes.string
}
