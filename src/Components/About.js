import React from 'react';
import profPic from '../utilities/profilepic.jpg';
import '../styles/about.css'
function About() {
    return (
        <div className='aboutContainer'>
            <div className='picContainer'>
                <img className={'profilePic'} src={profPic} alt="Devon Durst" />
            </div>
            <div className='aboutContainer'>
                <div className={'aboutMe'}> Hey, there! It's me, Devon Durst</div>
            </div>
        </div>

    )
}

export default About;

