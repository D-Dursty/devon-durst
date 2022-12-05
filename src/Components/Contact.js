import React from 'react';


function Contact() {
    return (
        <div className={'contact'}>

            <form class="form">
                <h2>CONTACT ME</h2>
                <p type="Name:"><input placeholder="Your Name Here"></input></p>
                <p type="Email:"><input placeholder="Your E-mail"></input></p>
                <p type="Message:"><input placeholder="Your Message"></input></p>
                <button>Send Message</button>
            </form>

        </div>
    )
}

export default Contact;