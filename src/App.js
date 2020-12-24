import React from 'react';
import { 
  Switch, Route, BrowserRouter 
} from 'react-router-dom';


import './style.css';


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

/**
 * TODO: 
 *  1. Ознакомиться с докой react-router
 *  2. Вынести с отдельный компоненты <MainPage /> и <RepositoryPage />, сложить их в отдельную папку src/pages
 *  3. Для страницы /repository набросать структуру страницы (название репы, автор, количество звезд, количество коммитов)
 *  4. Разбить style.css файл на отдельные *.css файлы и подключить в компоненты
 *  5. Вынести адреса из path в компоненте <Route /> в константы
 *  6*. Ознакомить с Eslint  
 */