import React from 'react';
import { mockRepositoryData } from './mock/repositories';
import {
    RepositoryList, SearchBlock, Title,
} from './components';


const MainPage = () =>
    (
        <>
            <Title />
            <SearchBlock />
            <RepositoryList mockRepositoryData={mockRepositoryData} />
        </>
    );
