import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Profile from "./components/Profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Etsy from "./components/Embedded/Etsy";

function App() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Portfolio />
            <Service />
            <Etsy/>
            <Footer />
        </div>
    );
}

export default App;
