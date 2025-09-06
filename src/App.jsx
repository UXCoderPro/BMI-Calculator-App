import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "./Pages/Intro";
import Data from "./Pages/Data";
import Result from "./Pages/Result";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import bg from "./assets/file/bg.svg";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/data" element={<Data />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="max-w-lg h-screen mx-auto relative flex flex-col gap-6 px-4 py-8"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <AnimateRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
