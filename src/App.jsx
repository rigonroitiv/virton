import React from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ClientPage from "./page/ClientPage";
import AdminPage from "./page/AdminPage";
import FilterApartment from "./components/FilterApartment";
import PlanimetriCards from "./components/filter/PlanimetriCards";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/*" element={<ClientPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/filterapartment" element={<FilterApartment />} />
          <Route path="/test" element={<PlanimetriCards />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
