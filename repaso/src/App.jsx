import { useState } from "react";
import Pets from "./modules/pets/Pets";
import Examples from "./modules/examples/Examples"
import CustomNavbar from "./components/CustomNavbar";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (<>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Navigate to="/pets" />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </>);
    }
