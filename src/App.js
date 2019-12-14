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
      {/* HEADER */}
      <header className="App-header" 
          onMouseEnter={()=> setTitleColor('red')} 
          onMouseLeave={()=>{ setTitleColor('black')}}>

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
        {/* BODY */}
        <div className="frontPage" style={{color:titleColor}} >
          <p>--  Welcome Ozaa and Ghoster to the front page!</p>
          {titleColor === 'red' ? <p>"Where Shit Magic Happens!"</p> : ""}
        </div>
      </body>
    </div>
  );
}

export default App;
