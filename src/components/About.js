import React from 'react';
import profPic from '../utilities/devon.JPG';
import '../styles/about.css'
function About() {
    return (
        <div className='aboutContainer'>
            <div className='picContainer'>
                <img className='profilePic' src={profPic} alt="Devon Durst" />
            </div>
            <div className='bioContainer'>
                <div className='aboutMe'> 
                <br></br>
                <p>With a colorful background in Interior Design & Project Management, Education, as well as Food and Farming, I'm excited to be diving into the world of Web Development</p>
                <p>I'm passionate about equity, and look forward to using my new found skills to promote access to resources through the internet</p>
                <p>Coding is a neverending puzzle that I look forward to perpetually solving. </p>
                <hr></hr>
                <br></br>
                <br></br>
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50" height="50"/>
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"width="50" height="50" />
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="50" height="50"/>
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50"/>
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50"/>
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50" />
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="50" height="50" />
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" width="50" height="50" />
                <img className='logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50" height="50" />
                <br></br>
                <br></br>
                <hr></hr>
                <div className='downloadContainer'>
                <button className='downloadBtn'><a className='download' href={require(`../utilities/projects/resume-1.png`)} target="_blank" download>DOWNLOAD MY RÉSUMÉ</a></button>
            </div>
                </div>
            </div>
        </div>

    )
}

export default About;

