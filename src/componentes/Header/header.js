import React from 'react';
import './style.css'


function Header() {
    return(
        <div className='header'>
            <div className='nav'>
                <div className='logo'>
                    <a href='#'><img src='https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg' /></a>
                </div>
          
                <div className='nav-links'>
                    <p>IDIOMA DO SITE: PORTUGUÊS</p>
                </div>
            </div>
        </div>
    );
}

export default Header;