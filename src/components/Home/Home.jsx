import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Service from "./Service";
import FindMe from "./FindMe";

function Home() {
    return (
        <div id="home">
            <Profile />
            <Portfolio />
            <Service />
            <FindMe />
        </div>
    );
}

export default Home;