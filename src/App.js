import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Profile from "./components/Home/Profile";
import Portfolio from "./components/Home/Portfolio";
import Service from "./components/Home/Service";
import Etsy from "./components/Home/Etsy";
import FindMe from "./components/Home/FindMe";
function App() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Portfolio />
            <Service />
            <FindMe />
            <Footer />
        </div>
    );
}

export default App;
