import './About.css'
import Spotify from './Spotify'
import LoveLetter from './LoveLetter'
import ContactUs from './ContactUs'
function About() {
    return (
        <div className="about-grid">
            <LoveLetter />
            <Spotify />
            <ContactUs />
        </div>
    );
}

export default About;
