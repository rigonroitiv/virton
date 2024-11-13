import React from "react";
import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ClientPage from "./page/ClientPage";
import AdminPage from "./page/AdminPage";
import FilterApartment from "./components/FilterApartment";

function App() {
  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/*" element={<ClientPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/filterapartment" element={<FilterApartment />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
