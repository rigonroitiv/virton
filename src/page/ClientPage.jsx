import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApartmentsPage from './ApartmentsPage'

const ClientPage = () => {
  return (
    <div>
      <Routes>
        <Route path='/apartments/:id' element={<ApartmentsPage />} />
      </Routes>
    </div>
  )
}

export default ClientPage