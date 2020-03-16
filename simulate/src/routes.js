import React from "react";
import { Routes, Route } from "react-router-dom";

import BitcoinDashboard from "./pages/BitcoinDashboard/index";
import TesouroDashboard from "./pages/TesouroDashboard/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TesouroDashboard />} />
      <Route path="/tesouro" element={<TesouroDashboard />} />
      <Route path="/bitcoin" element={<BitcoinDashboard />} />
    </Routes>
  );
}
