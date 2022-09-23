import QuestionsCanvas from 'canvas/QuestionsCanvas';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PagesCanvas from './canvas/PagesCanvas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ height: 800 }}>
        <Routes>
          <Route path='/' element={<PagesCanvas />} />
          <Route path=':page' element={<QuestionsCanvas />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);