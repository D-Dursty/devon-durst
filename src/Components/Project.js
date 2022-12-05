import React from 'react';
import '../styles/project.css'

function Project({ project }) {
    const { title, deployed, github, description } = project
    return (
        <div className={'projectContainer'}>
            <div className="project " key={title}>
                <img src={require(`../utilities/projects/${title}.png`)} alt={`Screenshot of ${title}.`} height="280" />

                        <a href={deployed}>{title}</a>
                        <br />
                        <a href={github}>GitHub</a>
    
                    <p>{description}</p>
            </div>
        </div>
    )
}

export default Project




