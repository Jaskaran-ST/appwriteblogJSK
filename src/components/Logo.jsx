import React from 'react'
import logoImage from '../images/download.png';

function Logo({ width = '100px' }) {
    return (
        <div>
            <img src={logoImage} alt="logo" />
        </div>
    )
}

export default Logo
