import React from 'react';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div className="body" style={{ paddingLeft: '7%', paddingTop: '30px' }}>
      <header style={{ color: '#01b3e3', fontWeight: 'bold', fontSize: '20px' }}>All Tax Preparations E-Filed The Same Day!</header>
      <p style={{ width: '90%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque.
        Sit amet justo donec enim diam. Nunc id cursus metus aliquam. Non nisi est sit amet facilisis magna. Et magnis dis parturient montes nascetur.
        Scelerisque viverra mauris in aliquam.
        Eu mi bibendum neque egestas congue. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.</p>
      <p style={{ width: '90%' }}>
        A condimentum vitae sapien pellentesque habitant morbi tristique. Massa sed elementum tempus egestas sed sed risus pretium quam.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et tortor consequat id porta nibh.
        Sapien nec sagittis aliquam malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
        Malesuada fames ac turpis egestas.</p>
      <p style={{ width: '90%' }}>
        Urna nunc id cursus metus aliquam eleifend mi in. Nunc sed id semper risus in hendrerit. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
        Quisque egestas diam in arcu. Etiam tempor orci eu lobortis elementum nibh. Tellus orci ac auctor augue mauris augue.</p>
      <Button variant="contained" style={{ backgroundColor: '#01b3e3', color: 'white' }}>
        Contact Us
      </Button>

      <div style={{ marginTop: '40px', backgroundColor: '#d6d6d6', marginLeft: '-8%' }}>
        <header style={{ color: '#01b3e3', fontWeight: 'bold', fontSize: '20px', marginLeft: '8%', paddingTop: '2%'}}>Services We Offer</header>
        <div style={{float: 'left', width: '50%', backgroundColor: '#d6d6d6', paddingLeft: '4%'}}>
          <p style={{fontWeight: 'bold', marginLeft: '8%'}}>Personal Taxes</p>
          <p style={{marginLeft: '8%', width: '80%'}}>
            Urna nunc id cursus metus aliquam eleifend mi in. Nunc sed id semper risus in hendrerit. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
            Quisque egestas diam in arcu. Etiam tempor orci eu lobortis elementum nibh. Tellus orci ac auctor augue mauris augue.</p>
        </div>
        <div style={{float: 'right', width: '46%', backgroundColor: '#d6d6d6'}}>
          <p style={{fontWeight: 'bold', marginLeft: '-5%'}}>Business Taxes</p>
          <p style={{marginLeft: '-5%', width: '80%'}}>
            Urna nunc id cursus metus aliquam eleifend mi in. Nunc sed id semper risus in hendrerit. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
            Quisque egestas diam in arcu. Etiam tempor orci eu lobortis elementum nibh. Tellus orci ac auctor augue mauris augue.</p>
        </div>
        <div style={{paddingTop: '20px', color: '#d6d6d6'}}>aa</div>
      </div>
    </div>
  );
}

export default Header;