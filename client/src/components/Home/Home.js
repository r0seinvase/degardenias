import "./Home.css";
import HomeCarrouselle from "./HomeCarrouselle";
function Home({ currentUser }) {
    return (
        <div className="home-page-grid">
            <div className="home-page-grid-left">
                {/* <h1>welcome {currentUser.firstname} !</h1> */}
                <h1 className="home-page-grid-heading"> Welcome to Our House </h1>
                <h2 className="home-page-grid-subheadding">New Arrivals Ready for Pickup, Houston!</h2>
            </div>
            <div className="home-page-grid-right">
                <img
                    className="home-page-grid-image"
                    src="Images/Home.JPG"
                    alt="Home Introduction"
                    style={{ width: "100%" }}
                />
                <HomeCarrouselle />
            </div>
        </div>
    );
}

export default Home;