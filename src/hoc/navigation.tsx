import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PublicRoutes } from "../routes/publicRoutes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
