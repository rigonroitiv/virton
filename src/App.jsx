import React from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ClientPage from "./page/ClientPage";
import AdminPage from "./page/admin/AdminPage";
import SvgExtractor from "./page/svgExtractor/SvgExtractor";
import { AuthProvider } from "./components/auth/AuthProvider";
import { ToastContainer } from "react-toastify";
import FloorSvgExtractor from "./page/admin/svgExtractor/FloorSvgExtractor";
import FloorBuildingSvgExtractor from "./page/admin/svgExtractor/FloorBuildingSvgExtractor";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />

      <Router>
        <Routes>
          <Route path="/" element={<ClientPage />} />
          <Route path="/svg-extrator" element={<SvgExtractor />} />
          <Route path="/fsvg-extrator" element={<FloorSvgExtractor />} />
          <Route
            path="/fbsvg-extrator"
            element={<FloorBuildingSvgExtractor />}
          />
          <Route
            path="/admin/*"
            element={
              <AuthProvider>
                <AdminPage />
              </AuthProvider>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
