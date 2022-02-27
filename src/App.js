import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RLink from './Routes/Routes';
import Movies from './Components/Pages/Home/Movies/Movies';
import './app.scss';
import { useState } from 'react';
function App() {
  const [status, setStatus] = useState(false);
  const getStatus=(status)=>{
    setStatus(status);
  }
    return (  
     <HashRouter basename='/movie'>
      <div className='main-project'>
         <div className='container'>
          <Navigation status={status} reciveStatus={getStatus}></Navigation>
          <RLink status={status} reciveStatus={getStatus}></RLink>
        </div>
      </div>
      </HashRouter>
    );
}

export default App;
