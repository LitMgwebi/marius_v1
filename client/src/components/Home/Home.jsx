import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Service from "./Service";
import FindMe from "./FindMe";
import AboutMe from "./AboutMe";

function Home() {
    return (
        <div id="home">
            <Profile />
            <AboutMe/>
            <Portfolio />
            <Service />
            <FindMe />
        </div>
    );
}

export default Home;