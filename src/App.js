import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //LOCAL STATE
  const [titleColor, setTitleColor] = useState('black')
  //FUNCTIONS

  //RENDER
  return (
    <div className="App">
      <header className="App-header" onMouseEnter={()=> setTitleColor('red')} onMouseLeave={()=>{ setTitleColor('black')}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div className="frontPage" style={{color:titleColor}} >
         --  Welcome Ozaa and Ghoster to the front page!
        </div>
      </body>
    </div>
  );
}

export default App;
