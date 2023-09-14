import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "../routers";
const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
