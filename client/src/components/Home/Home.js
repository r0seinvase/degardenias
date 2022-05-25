import './Home.css';
import HomeCarrouselle from "./HomeCarrouselle"
function Home() {
    return (
        <div className="home-page-grid">
            <h1 className="home-page-grid-heading"> Welcome to Our House </h1>
            <img className="home-page-grid-image" src="Images/Home.JPG" alt="Home Introduction" style={{ width: "35%" }} />
            <HomeCarrouselle />
        </div>
    );
}

export default Home;