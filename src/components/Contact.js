import React from 'react';
import '../styles/contact.css'

function Contact() {
    return (
        <div className='contactContainer'>
        <div className='contact'>

            <form className="form">
                <h2>CONTACT ME</h2>
                <p type="Name:"><input placeholder="Your Name Here"></input></p>
                <p type="Email:"><input placeholder="Your E-mail"></input></p>
                <p type="Message:"><input placeholder="Your Message"></input></p>
                <button>Send Message</button>
            </form>

        </div>
        </div>
    )
}

export default Contact;