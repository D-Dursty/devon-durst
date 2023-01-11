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
                <div className={'aboutMe'}> 
                <br></br>
                <p>With a colorful background in Interior Design & Project Management, Education, as well as Food and Farming, I'm excited to be diving in to the world of Web Development</p>
                <p>I'm passionate about equity, and look forward to using my new found skills to promote access to resources through the internet</p>
                <p>Coding is a neverending puzzle, that I look forward to perpetually solving. </p>
                <hr></hr>
                </div>
            </div>
        </div>

    )
}

export default About;

