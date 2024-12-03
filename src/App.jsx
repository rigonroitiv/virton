import React from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ClientPage from "./page/ClientPage";
import AdminPage from "./page/AdminPage";
import SvgExtractor from "./page/svgExtractor/SvgExtractor";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/*" element={<ClientPage />} />
          <Route path="/svg-extrator" element={<SvgExtractor />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
