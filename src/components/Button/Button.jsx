import React from 'react';


export const Button = ({
    buttonText,
    onClick,
}) =>
    (
        <button onClick={onClick}>{buttonText}</button>
    );
