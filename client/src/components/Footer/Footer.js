import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (

        <div className="contact-us-container">
            <h2> Let's Keep in Touch </h2>
            <div className="contact-us-grid">
             <div className="contact-us"> Follow Us <SocialIcon className="contactUs-icon" url="https://www.instagram.com/degardenias/" /></div>
                <div className="contact-us"> Write Us <SocialIcon className="contactUs-icon" url="https://mail.google.com/mail/?view=cm&fs=1&to=degardeniashome@gmail.com" /></div>
                <div className="contact-us"> Read What The Founder Has to Say <SocialIcon className="contactUs-icon" url="https://medium.com/@raadgal" /></div>
                <div className="contact-us"> See What Our Developer is up to <SocialIcon className="contactUs-icon" url="https://github.com/r0seinvase" /></div>
                <div className="contact-us"> Connect With Our Founder/Developer <SocialIcon className="contactUs-icon" url="https://www.linkedin.com/in/paola-moreno-reyes-b00b60160/" /></div>
            </div>
        </div>


    );
}

export default Footer;
