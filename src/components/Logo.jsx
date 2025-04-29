import React from 'react'

function Logo({ width = '100px' }) {
    return (
        <div>
            <img src="./public/download (1).png" alt="logo" width={width} />
        </div>
    )
}

export default Logo