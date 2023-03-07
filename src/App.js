import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./routes/about";
import Meteo from "./routes/meteo";
import Home from "./routes/coins";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
