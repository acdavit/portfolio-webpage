import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Header from './components/header';

import colorChanger from './animations/colorChanger';
import glass from './animations/glass/glass';

import './animations/glass/glass.css'
import './index.css';

function App() {
  React.useEffect(() => {
    colorChanger();
    glass();
  })

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
