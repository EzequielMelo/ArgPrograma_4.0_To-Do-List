import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/NavbarTop";
import "./App.css";
import Mistableros from "./routes/MisTableros";
import Home from "./routes/Home";
import Historial from "./routes/Historial";
import Completadas from "./routes/Completadas";
/* import { CgDarkMode } from "react-icons/cg"; */
import Switch from '@mui/material/Switch';

function AppLayout (){
  const [darkMode, setDarkMode] = useState(false);
  const changeColor = () => {
    setDarkMode(!darkMode)
  };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (

    <>
      <Navbar darkMode={darkMode} />
      <div className={darkMode ? 'toggle darkMode' : 'toggle'}>
        <Switch {...label} onClick={changeColor}  size="80" />
      </div>
      {/* <CgDarkMode /> */}
      <Outlet context={[darkMode, setDarkMode]} /> 
    </>
  )
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "MisTableros",
        element: <Mistableros />,
      },
      {
        path: "Historial",
        element: <Historial />,
      },
      {
        path: "Completadas",
        element: <Completadas />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);