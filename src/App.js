import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gate from "./pages/Gates";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Gate />} /> */}
          <Route path="/gates" element={<Gate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
