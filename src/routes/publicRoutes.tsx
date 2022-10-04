import React from "react";
import { Route, Routes } from "react-router-dom";

import { Counter } from "../features/counter/Counter";
import { MyCv } from "../features/myCv";
import { Wishlist } from "../features/wishlist";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wishlist />} />
      <Route path="/myCv" element={<MyCv />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
