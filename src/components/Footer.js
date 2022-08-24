import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../ri.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-img">
            <Link to='/'><img src={logo} alt="logo" className='footer-logo' /></Link>
        </div>
        <div className="footer-info">
            Developed by &copy; <Link className='footer-add' to='https://www.fb.com/ribpy'>Riaz Bappy</Link>
        </div>
    </div>
  )
}
export default Footer;