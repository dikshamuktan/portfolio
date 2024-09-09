import { useState } from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import "./App.css";
import { fromJSON } from "postcss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
