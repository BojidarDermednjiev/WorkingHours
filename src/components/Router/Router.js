import React from 'react'
import { Route, Routes } from 'react-router-dom'


// Pages
import Home from '../pages/Home'
import DatePicker from '../pages/DatePicker'


export default function Router() {
  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/calendar/create" element={<DatePicker/>} />

    </Routes>

  )
}
