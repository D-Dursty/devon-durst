import '../styles/resume.css';

function Resume() {
    return (
        <div className='resumeContainer'>

            <div className='resume'><img width='700px' src={require(`../utilities/projects/resume-1.png`)}></img></div>
            <div className='downloadContainer'>
                <button className='downloadBtn'><a className='download' href={require(`../utilities/projects/resume-1.png`)} target="_blank" download>Download My Resume</a></button>
            </div>
        </div>
    )
}

export default Resume;