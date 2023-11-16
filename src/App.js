import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Error404 from "./components/Error404"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Error404" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
