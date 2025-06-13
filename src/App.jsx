import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project1 from "./pages/projects/Project1.jsx";
import Project2 from "./pages/projects/Project2.jsx";
import Project3 from "./pages/projects/Project3.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

const App = () => {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      </Router>
  )
}

export default App