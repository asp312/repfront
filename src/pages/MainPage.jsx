import React from 'react';
import { mockRepositoryData } from './mock/repositories';
import { SearchBlock, Title, RepositoryList } from './components';


const MainPage = () => (
    <>
        <Title />    
        <SearchBlock />   
        <RepositoryList mockRepositoryData={mockRepositoryData} />
    </>
  );