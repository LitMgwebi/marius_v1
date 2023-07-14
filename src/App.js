import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Profile from "./components/Profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Portfolio/>
            <Footer />
        </div>
    );
}

export default App;
