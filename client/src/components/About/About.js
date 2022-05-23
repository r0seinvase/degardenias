import './About.css'
import Spotify from './Spotify'
import LoveLetter from './LoveLetter'
function About() {
    return (
        <div className="about-grid">
            <LoveLetter/>
            <Spotify/>
        </div>
    );
}

export default About;
