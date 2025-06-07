// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import ScrollToTop from "./snippets/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-neutral-900 dark:text-white">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
