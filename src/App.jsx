import React from 'react'
import './App.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import ClientPage from './page/ClientPage'
import AdminPage from './page/AdminPage'

function App() {

  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path='/*' element={<ClientPage />}/>
          <Route path='/admin/*' element={<AdminPage />}/>
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default App
