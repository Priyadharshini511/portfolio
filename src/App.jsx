import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './styles/animation.css'; // Import the CSS file


const App = () => (
  <Router>
    {/* Background Wrapper */}
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow flex justify-center items-center p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
);

export default App;
