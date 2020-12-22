import React, { useState, useCallback } from 'react';

import { Button } from '../../components';


export const Counter = ({}) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevState => ++prevState);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(prevState => --prevState);
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button onClick={decrement} buttonText={'Уменьшить'}/>
            <Button onClick={increment} buttonText={'Увеличить'}/>
        </div>
    );
}
