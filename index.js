import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import grapefruit from './grapefruit.jpg';
import bomb from './bomb.svg';



function Sweeper(){
  return <div>
    <Header/>
  </div>
}

const Header = () => {
  return <div className="application">
    <h1>
      Minesweeper
      <img class="fit-picture"src={bomb}/>
    </h1>
    
    
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <Sweeper />
  </React.StrictMode>,
  document.getElementById('root')
);


