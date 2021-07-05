import React from 'react';
import Button from '@material-ui/core/Button';
import map from './map.PNG';

function Header() {
  return (
    <div className="footer" style={{ backgroundColor: '#281c21' }}>
      <header style={{ color: '#01b3e3', fontWeight: 'bold', fontSize: '20px', marginLeft: '8%', paddingTop: '1%' }}>Contact Us</header>
      <div style={{ float: 'left', width: '14%', backgroundColor: '#281c21', paddingLeft: '7%', paddingRight: '5%' }}>
        <form style={{ marginLeft: '10%', paddingTop: '20px' }}>
          <input style={{ borderRadius: '5px', width: '250px' }}
            type="text"
            id="name"
            placeholder="Name"
          />
          <div style={{ marginTop: '5px' }}></div>
          <input style={{ borderRadius: '5px', width: '250px' }}
            type="text"
            id="email"
            placeholder="Email"
          />
          <div style={{ marginTop: '5px' }}></div>
          <input style={{ height: '100px', width: '250px', borderRadius: '5px' }}
            type="text"
            id="message"
            placeholder="Message"
          />
          <div style={{ marginTop: '5px' }}></div>
          <input
            type="checkbox"
            id="agree"
          />
          <label for="agree" style={{ color: 'white', paddingLeft: '5px' }}>Yes, I have read and understand the privacy policy. I would like to stay connected to recieve communications containing news,
            updates and promotions from Bob's Tax Service. I can unsubscribe at any time.</label>
          <div style={{ marginTop: '25px' }}></div>
          <Button variant="contained" style={{ backgroundColor: '#01b3e3', color: 'white', width: '250px', textAlign: 'center' }}>
            Send Message
          </Button>
        </form>
      </div>
      <div style={{ float: 'left', width: '46%', backgroundColor: '#281c21' }}>
        <img src={map} style={{ width: '100%', height: '390px', marginLeft: '0%', paddingTop: '22px' }} />
      </div>
      <div style={{ float: 'left', width: '25.47%', backgroundColor: '#281c21', color: 'white', paddingLeft: '2.53%', height: '416px'}}>
        <p style={{fontWeight: 'bold'}}>Address:</p>
        <p style={{marginTop: '-10px'}}>461 North Service Road W.</p>
        <p style={{marginTop: '-10px'}}>Oakville, Ontario</p>
        <p style={{marginTop: '-10px'}}>L6M 2V5</p>
        <p style={{marginTop: '-10px'}}>Canada</p>
        <div style={{marginTop: '10px', color: '#281c21'}}>a</div>
        <p style={{fontWeight: 'bold'}}>Phone:</p>
        <p style={{marginTop: '-10px'}}>555-555-5555</p>
        <div style={{marginTop: '10px', color: '#281c21'}}>a</div>
        <p style={{fontWeight: 'bold'}}>Email:</p>
        <p style={{marginTop: '-10px'}}>info@bobstax.com</p>
        <div style={{marginTop: '27px', color: '#281c21'}}>a</div>
      </div>
      <div style={{width: '100%', height: '50px', backgroundColor: '#281c21', color: 'white', float: 'right', textAlign: 'right'}}>
        <hr style={{size: '5', width: '83%', color: 'white'}}></hr>
        <span style={{paddingRight: '9%'}}>Copyright © Bob's Tax Service Ltd 2018</span>
      </div>
    </div>
  );
}

export default Header;