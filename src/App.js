import React from 'react';
import './style.css';


import { mockRepositoryData } from './mock/repositories';
import { SearchBlock, Title, RepositoryList } from './components';

function App() {
  return (
    <>
      <Title />    
      <SearchBlock />   
      <RepositoryList mockRepositoryData={mockRepositoryData} />
    </>        
  );
}

export default App;
