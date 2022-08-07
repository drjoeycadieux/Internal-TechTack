import './App.css';

import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}