import '../styles/resume.css';

function Resume() {
    return (
        <div className='resumeContainer'>

            <div className='frontEnd'>
                <p className='frontTitle'>Front-end Proficiencies:</p>
                <p className='frontOne'>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>JavaScript</li>
                    </ul>
                </p>
                <p className='frontTwo'>
                    <ul>
                        <li>JQUery</li>
                        <li>Progressive Web Applications</li>
                        <li>Bootstrap</li>
                        <li>TailWind</li>
                    </ul>
                </p>
            </div>
            <hr></hr>
            <div className='backEnd'>
                <p className='backTitle'>Back-end Proficiencies:</p>
                <p className='backOne'>
                    <ul>
                        <li>Third-Party API's</li>
                        <li>Node.js</li>
                        <li>Object Oriented Programming</li>
                        <li>Express</li>
                    </ul>
                </p>
                <p className='backTwo'>
                    <ul>
                        <li>ORM</li>
                        <li>MVC</li>
                        <li>MySql, Sequelize</li>
                    </ul>
                </p>
            </div>
            <hr></hr>
            <div className='downloadContainer'>
                <button className='downloadBtn'><a className='download' href={require(`../utilities/devon-resume.pdf`)} target="_blank" download>Download My Resume</a></button>
            </div>
        </div>
    )
}

export default Resume;