import React from 'react';
import { 
  Switch, Route, BrowserRouter 
} from 'react-router-dom';


import './style.css';


import { mockRepositoryData } from './mock/repositories';
import { SearchBlock, Title, RepositoryList } from './components';


const MainPage = () => (
  <>
      <Title />    
      <SearchBlock />   
      <RepositoryList mockRepositoryData={mockRepositoryData} />
  </>
);

const RepositoryPage = () => (
  <h1>Repository page</h1>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/repository"} component={RepositoryPage} />
      </Switch>   
    </BrowserRouter>    
  );
}

export default App;
