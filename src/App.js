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

      <div>
        {/* BODY */}
        <div className="frontPage" style={{color:titleColor}} >
          <p>--  Welcome Ozaa and Ghoster to the front page!</p>
          {titleColor === 'red' ? <p>"Where Shit Magic Happens!"</p> : ""}
        
        
          <div style={{display: 'flex', flex:1, flexDirection: 'row',}}>
            {/* SANDBOX */}
            <div style={{width:'50vw',height:'60vh', backgroundColor:'lightgreen'}}>
              {/* OZAA'S BOX */}
              <h1>Ozza Box</h1>
              {/* TRY TO SEPERATE THIS BOX INTO TWO COLUMNS AND MAKE A LIST OF COLORS THAT WHEN YOU PRESS, */}
              {/* THE OTHER COLUMN WILL CHANGE BACKGROUND COLOR TO THE NAME OF THE COLOR YOU PRESSED */}
            </div>

            <div style={{width:'50vw',height:'60vh', backgroundColor:'lightblue'}}>
              {/* GHOSTS'S BOX */}
              <h1>Ghost Box</h1>
              {/* TRY SOME STUFF HERE */}

              {/* </div> */}
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
