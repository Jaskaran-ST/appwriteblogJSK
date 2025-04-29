import React from 'react'
import logoImage from '../images/download.png';

function Logo({ width = '900px' }) {
    return (
        <div>
            <img src={logoImage} alt="logo" width={width} />
        </div>
    )
}

export default Logo
