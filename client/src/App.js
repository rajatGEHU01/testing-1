import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Section from "./pages/Section";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Section />} />
        <Route path="/questions/:category/:company" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;