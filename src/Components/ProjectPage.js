import React, { useState } from 'react';
import Project from './Project';

function ProjectPage(){
    const [projects] = useState([
        {
            name: "Portfolio Assignment One",
            deployed: "https://d-dursty.github.io/devon-durst-personal-webpage/",
            github: "https://github.com/D-Dursty/devon-durst-personal-webpage",
            description: "HTML, CSS"
        },
        
    ])
    
    
    return (
        <div >
            {projects.map((p, i) => (
    
                <Project
                    project={p}
                    key={'project' + i} />
            ))}
        </div>
    );
    
}
export default ProjectPage




function Portfolio() {
}

