import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/main-page';
import { Layout } from './components/layout/layout';
import './index.css';
import { BookPage } from './pages/book';
import {Terms} from './pages/terms/terms-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/books/:category/:id' element={<BookPage />} />
          <Route path='/terms' element={<Terms content='terms'/>} />
          <Route path='/agreement' element={<Terms content='agreement'/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
