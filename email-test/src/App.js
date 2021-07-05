import logo from './logo.svg';
import machine1 from './machine1.PNG';
import machine2 from './machine2.PNG';
import table from './table.PNG';
import topper from './topper.PNG';
import bottom from './bottom.PNG';
import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div >
      <header style={{ marginLeft: '21%' }}>
        <img src={topper} style={{ width: '75%' }} />
        <p style={{ marginLeft: '7%', width: '60%', fontSize: '34px', textAlign: 'center' }}>THE CHOICE IS YOURS DURING THE </p>
        <p style={{ marginLeft: '8%', width: '60%', fontSize: '34px', textAlign: 'center', marginTop: '-25px' }}>BEST PRICE OF THE YEAR SALE</p>
      </header>
      <div style={{ float: 'left', width: '37%', marginLeft: '19%' }}>
        <img src={machine1} />
        <header style={{ fontSize: '35px', color: '#b5b504' }}>BERNINA 350 PE</header>
        <p style={{ fontSize: '25px', marginTop: '0px' }}>$1,499 / SAVE $800</p>
        <p>{'>'} 191 stitch patterns</p>
        <p>{'>'} BERNINA Free Hand System</p>
        <p>{'>'} Automatic one step buttonhole</p>
        <p>{'>'} Walking foot included</p>
        <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', width: '250px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px' }}>
          LEARN MORE
        </Button>
        <Button variant="contained" style={{ backgroundColor: 'red', color: 'white', width: '75px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px', marginLeft: '10px' }}>
          BUY
        </Button>
        <p>$2,299 MSRP</p>
      </div>
      <div style={{ float: 'left', width: '30%', marginBottom: '30px' }}>
        <img src={machine2} />
        <header style={{ fontSize: '35px', color: '#b5b504', marginTop: '30px' }}>BERNINA L 450</header>
        <p style={{ fontSize: '25px', marginTop: '0px' }}>$999 / SAVE $450</p>
        <p>{'>'} High-quality stitches</p>
        <p>{'>'} Wave free seams</p>
        <p>{'>'} Fast and smooth at any speed</p>
        <p>{'>'} Well-lighted, large sewing space</p>
        <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', width: '250px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px' }}>
          LEARN MORE
        </Button>
        <Button variant="contained" style={{ backgroundColor: 'red', color: 'white', width: '75px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px', marginLeft: '10px' }}>
          BUY
        </Button>
        <p>$1,449 MSRP</p>
      </div>
      <div style={{ clear: 'left' }}>
        <hr style={{ size: '5', width: '69%' }}></hr>
        <Button variant="contained" style={{ backgroundColor: '#b5b504', color: 'white', width: '150px', height: '55px', textAlign: 'center', borderRadius: '0px', marginLeft: '44%', marginTop: '-42px' }}>
          BUNDLE
        </Button>
      </div>
      <div>
        <p style={{ marginLeft: '19%', width: '60%', fontSize: '34px', textAlign: 'center' }}>BUY BOTH AND RECEIVE THE 18" X 24" SEW</p>
        <p style={{ marginLeft: '19%', width: '60%', fontSize: '34px', textAlign: 'center', marginTop: '-25px' }}>STEADY EXTENSION TABLE FREE</p>
        <img src={table} style={{ width: '37%', marginLeft: '19%', float: 'left' }} />
        <div style={{float: 'left', marginLeft: '20px', marginTop: '2%'}}>
          <header style={{ fontSize: '35px', color: '#b5b504', marginTop: '30px' }}>BERNINA 350 PE {'&'}</header>
          <header style={{ fontSize: '35px', color: '#b5b504', marginTop: '0px' }}>BERNINA L 450</header>
          <p style={{ fontSize: '25px', marginTop: '0px' }}>$2,498 / SAVE $1,250</p>
          <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', width: '250px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px' }}>
            LEARN MORE
          </Button>
          <Button variant="contained" style={{ backgroundColor: 'red', color: 'white', width: '75px', textAlign: 'center', border: 'solid 1px black', borderRadius: '0px', marginLeft: '10px' }}>
            BUY
          </Button>
          <p>$3,748 MSRP</p>
        </div>
      </div>
      <footer style={{ marginLeft: '21%' }}>
        <img src={bottom} style={{ width: '75%' }} />
      </footer>
    </div>
  );
}

export default App;
