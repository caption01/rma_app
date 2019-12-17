import React from 'react'
import Particles from 'react-particles-js';

import particleConfig from './particlesjs-config.json'

class Background extends React.Component{
  
    render(){
        return (
            <div className='background'>
                <Particles
                  params={particleConfig} 
                  style={{
                    "zIndex": "-100", 
                    "position":"fixed", 
                    'top': '0',
                    "backgroundColor": "#4c57a4"
                  }}
                />
            </div>
        );
    };
 
}

export default Background