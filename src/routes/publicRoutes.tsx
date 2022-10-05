import React from "react";
import { Route, Routes } from "react-router-dom";

import { Counter } from "../features/counter/Counter";
import { MyCv } from "../features/myCv";
import { TaskList } from "../features/taskList";
import { Wishlist } from "../features/wishlist";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cv" element={<MyCv />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
