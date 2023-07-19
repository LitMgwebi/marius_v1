import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Home from "./components/Home/Home";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Items from "./components/Items/Items";
import useLocalStorage from "use-local-storage";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const switchTheme = () => {
        const newTheme = theme === 'light'
            ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return (
        <div className="App" data-theme={theme}>
            <BrowserRouter>
                <Header theme={switchTheme} imgIcon={theme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Items /> }/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
