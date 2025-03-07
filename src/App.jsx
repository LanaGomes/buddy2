import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Extrato from "./pages/Extrato";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extract" element={<Extrato />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
