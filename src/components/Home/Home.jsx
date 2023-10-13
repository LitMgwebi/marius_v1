import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Socials from "./Socials";

function Home({theme}) {
    return (
        <main id="home">
            <Profile/>
            {/* <div id="animation">
                <Animation />
            </div> */}
            <Portfolio theme={theme}/>
            <Service/>
            <Socials theme={theme}/>
        </main>
    );
}

export default Home;
