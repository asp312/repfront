import React from 'react';

import { SearchPanel } from '.';
import { SearchButton } from '../Button';

export const SearchBlock = () => {
    return (
        <div>
            <SearchPanel />
            <SearchButton buttonText={'Найти'} />
        </div>
    );
};