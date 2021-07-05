import topper from './topper.PNG';
import logo from './logo.PNG';
import React from 'react';
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className="topper">

            <div style={{marginTop: '-16px'}}>
                <img src={logo} style={{ float: "left", width: '30px', paddingRight: '5px', marginLeft: '100px', paddingTop: '3px'}} />
                <p style={{color: 'white', backgroundColor: '#281c21', height: '40px', paddingTop: '8px', marginBottom: '0px'}}>Bob's Tax Service</p>
                <div style={{ float: "right", marginTop: '-44px', marginRight: '100px'}}>
                    <Button style={{color: 'white', backgroundColor: '#281c21'}}>Home</Button>
                    <span style={{color: '#01b3e3'}}>|</span>
                    <Button style={{color: 'white', backgroundColor: '#281c21'}}>Services</Button>
                    <span style={{color: '#01b3e3'}}>|</span>
                    <Button style={{color: 'white', backgroundColor: '#281c21'}}>Contact</Button>
                </div>
            </div>
            <div style={{background: 'linear-gradient(180deg, rgba(40,28,33,1) 0%, rgba(40,28,33,1) 65%, rgba(1,179,227,1) 100%)'}}>
                <img src={topper} style={{ width: '84%', height: '300px', marginLeft: '8%' }}/>
            </div>
        </div>
    );
}

export default Header;