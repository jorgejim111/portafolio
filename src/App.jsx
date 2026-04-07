import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Chaos from "./pages/Chaos";
import Kanban from "./pages/Kanban";
import DCS from "./pages/DCS";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[url('/assets/bg5.jpg')] bg-cover bg-fixed text-gray-900">
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects/chaos" element={<Chaos />} />
          <Route path="/projects/kanban" element={<Kanban />} />
          <Route path="/projects/dcs" element={<DCS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
