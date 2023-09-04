import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Socials from "./Socials";
import AboutMe from "./AboutMe";

function Home() {
    return (
        <div id="home">
            <Profile />
            <AboutMe/>
            <Portfolio />
            <Service />
            <Socials />
        </div>
    );
}

export default Home;