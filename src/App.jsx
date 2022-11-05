import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip, Button } from "flowbite-react";
import { Navbar, Sidebar, ThemeChanger } from "./Components";
import { useStateContext } from "./Context/ContextProvider";
import {
  AddDesign,
  AddImport,
  AddKhwanta,
  AddKhwantaCloth,
  Dashboard,
  PrintBarcode,
  SingleDesign,
  SingleProduct,
  ViewDesign,
  ViewProduct,
} from "./Page";

// import Router from "./router";

function App() {
  const { activeMenu } = useStateContext();
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
          <ThemeChanger />
        {activeMenu ? (
          <div className="w-72 z-50 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/ViewDesign" element={<ViewDesign />} />
              <Route path="/AddDesign" element={<AddDesign />} />
              <Route path="/ViewProduct" element={<ViewProduct />} />
              <Route path="/AddKhwantaCloth" element={<AddKhwantaCloth />} />
              <Route path="/AddKhwanta" element={<AddKhwanta />} />
              <Route path="/AddImport" element={<AddImport />} />
              <Route path="/PrintBarcode" element={<PrintBarcode />} />
              <Route path="/ViewDesign/:id" element={<SingleDesign />} />
              <Route path="/ViewProduct/:id" element={<SingleProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
