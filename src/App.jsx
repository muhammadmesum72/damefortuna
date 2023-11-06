import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MintPage from "./components/MintPage";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import TokenGated from "./components/TokenGated";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className="px-3 md:px-0 flex flex-col  container mx-auto overflow-hidden ">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Partners />
                  <Roadmap />
                </>
              }
            />
            <Route path="/mint" element={<MintPage />} />
            <Route path="/tokenGated" element={<TokenGated />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
