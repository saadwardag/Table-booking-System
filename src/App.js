import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import TableReservation from './components/TableReservation';
import Confirmation from './components/Confirmation';
import ConfirmedBooking from './components/ConfirmedBooking';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/reservation" element={<TableReservation/>}></Route>
      </Routes>
      <Routes>
        <Route path="/confirm-booking" element={<Confirmation/>}></Route>
      </Routes>
      <Routes>
        <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
