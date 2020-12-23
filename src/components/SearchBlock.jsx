import React from 'react';

import { SearchPanel } from './Search';
import { SearchButton } from './Button';

export const SearchBlock = () => {
    return (
        <div>
            <SearchPanel />
            <SearchButton buttonText={'Найти'} />
        </div>
    );
};