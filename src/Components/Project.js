import React from 'react';
import '../styles/project.css'

function Project() {
    return (
        <div className='pageContainer'>
            
            <div className='singleProjectContainer'>
                
                    <div className='imageContainer'>
                    <img width='400px' src={require(`../utilities/projects/The Stay Homie.png`)}></img>
                    </div>

                    <div className='infoContainer'>
                        <ul className='infoList'>
                            <li>The Stay Homie </li>
                            <li>The Ultimate Get-Out-of-Work Excuse Generator</li>
                            <br/>
                            <li><div className='description'>The Stay Homie is a tongue-in-check excuse generator built using HTML, TailWind, and JavaScript</div></li>
                            <br/>
                            <li><a className='repo' href="" target="_blank">Visit Site</a></li>
                            <li><a className='repo' href="" target="_blank">GitHub Repository</a></li>
                        </ul>
                    </div>

            </div>
            

        </div>
    )
}

export default Project