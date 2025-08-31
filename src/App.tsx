import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}
