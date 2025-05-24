import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/registration" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </>
  )
);


const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App