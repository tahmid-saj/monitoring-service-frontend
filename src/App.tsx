import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.routes';
import MonitoringRoute from './routes/monitoring/monitoring.routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <MonitoringRoute/> }/>
      </Route>
    </Routes>
  )
}

export default App;
