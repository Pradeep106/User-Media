import { useEffect, useState } from "react";
import "./App.css";
import { getAllUsers } from "./Services/Operations/UserAPI";
import Header from "./components/Header";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import Pagination from "./components/Pagination";
import { BrowserRouter, useLocation } from "react-router-dom";
import DisplayUser from "./components/DisplayUser";
import SearchUser from "./components/SearchUser";
import { Route, Routes } from "react-router-dom";
import offlin from "./components/offlin";
function App() {
  return (
    <div className="bg-[#F8FAFC] ">
      {/* <Header />
      <SearchUser />
      <DisplayUser /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
