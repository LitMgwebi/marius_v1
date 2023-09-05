import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
import Animation from "./Animation";

function Home() {
    return (
        <div id="home">
            <Profile />
            <div id="animation">
                <Animation />
            </div>
            <AboutMe />
            <Portfolio />
            <Service />
            <Socials />
        </div>
    );
}

export default Home;