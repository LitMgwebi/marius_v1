import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Home from "./components/Home/Home";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Items from "./components/Items/Items";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Items /> }/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
