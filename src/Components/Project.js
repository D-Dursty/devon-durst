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
                    <ul>
                        <li><h5>The Stay Homie </h5></li>
                        <h6>The Ultimate Get-Out-of-Work Excuse Generator</h6>
                    
                        <div className='description'></div>
                        <a href="" target="_blank">Launch Site</a>
                        <a href="" target="_blank">GitHub Repository</a>
                    </ul>
                </div>
            </div>
            
            {/* <div className='singleProjectContainer'>
                <div>
                    <h4>The Stay Homie: The Ultimate Get-Out-of-Work Excuse Generator</h4>
                    <div className='imageContainer'>
                    <img></img>
                    </div>
                    <div className='detailsContainer'>
                        <div className='description'></div>
                        <a href="" target="_blank">Launch Site</a>
                        <a href="" target="_blank">GitHub Repository</a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Project