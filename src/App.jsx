import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App