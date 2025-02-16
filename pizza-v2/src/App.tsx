import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = lazy(() => import('./pages/Cart'));
const FullPizza = lazy(() => import('./pages/FullPizza'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='pizza/:id'
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
