import React from 'react'

import logoPicture from './logo.jpg'

import './logo.style.scss'

const Logo = () => (
    <div className='logo-container'>
        <div className='logo-picture-container'>
            <img alt='logo' className='logo-picure' src={logoPicture} />
        </div>
    </div>
)


export default Logo