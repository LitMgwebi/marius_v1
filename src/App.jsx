import Header from "./components/PageEnvelope/Header";
import Footer from "./components/PageEnvelope/Footer";
import Portfolio from "./components/Home/Portfolio";
import Service from "./components/Home/Service";
import Socials from "./components/Home/Socials";
import Profile from "./components/Home/Profile";
// import Home from "./components/Home/Home";
// import Copyright from "./components/Copyright/Copyright";
// import AboutMe from "./components/AboutMe/AboutMe";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import Items from "./components/Items/Items";
import useLocalStorage from "use-local-storage";
import { AnimatePresence } from "framer-motion";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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
            <AnimatePresence >
                <Header
                    theme={switchTheme}
                    imgIcon={theme}

                />
                <Profile />
                <Portfolio theme={theme} />
                <Service />
                <Socials theme={theme} />

                <Footer />
            </AnimatePresence>
        </div>
    );
}

export default App;
