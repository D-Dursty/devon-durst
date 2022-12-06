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
                            <li className='title'><b>The Stay Homie </b></li>
                            <li className='subtitle'>The Ultimate Get-Out-of-Work Excuse Generator</li>
                            <br/>
                            <li><div className='description'>The Stay Homie is a tongue-in-check excuse generator built using HTML, TailWind, and JavaScript</div></li>
                            <br/>
                            <li><a className='repo' href="https:/cornetj13.github.io/stay-homie/" target="_blank">Visit Site</a></li>
                            <li><a className='repo' href="https://github.com/cornetj13/stay-homie" target="_blank">GitHub Repository</a></li>
                        </ul>
                    </div>

            </div>
           
            <div className='singleProjectContainer'>
                

                    <div className='infoContainerTwo'>
                        <ul className='infoList'>
                            <li className='title'><b>Bird Brain </b></li>
                            <li className='subtitle'>A Digital Journal for Bird Nerds</li>
                            <br/>
                            <li><div className='description'>Bird Brain allows users to log birding outings and track associated bird sitings with facts, picture uploads, api search data, and geolocation. This site was built using JavaScript, Sequelize, Handlebars and BootStrap.</div></li>
                            <br/>
                            <li><a className='repo' href="https://birdbrain2022.herokuapp.com/" target="_blank">Visit Site</a></li>
                            <li><a className='repo' href="https://github.com/Sullisters/Bird-watcher" target="_blank">GitHub Repository</a></li>
                        </ul>

                    <div className='imageContainerTwo'>
                    <img width='400px' src={require(`../utilities/projects/Bird Brain.png`)}></img>
                    </div>
                    </div>

            </div>
            
            <div className='singleProjectContainer'>
                
                    <div className='imageContainer'>
                    <img width='400px' src={require(`../utilities/projects/Devon Durst Portfolio One.png`)}></img>
                    </div>

                    <div className='infoContainer'>
                        <ul className='infoList'>
                            <li className='title'><b>Portfolio One </b></li>
                            
                            <br/>
                            <li><div className='description'>A practice in flexbox, this portfolio was my first build-from-scratch assignment. It includes a seamless media query transition, and was built using HTML, and CSS. </div></li>
                            <br/>
                            <li><a className='repo' href="https://github.com/D-Dursty/devon-durst-personal-webpage" target="_blank">Visit Site</a></li>
                            <li><a className='repo' href="https://d-dursty.github.io/devon-durst-personal-webpage/" target="_blank">GitHub Repository</a></li>
                        </ul>
                    </div>

            </div>
            

        </div>
    )
}

export default Project