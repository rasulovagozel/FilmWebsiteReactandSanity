import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import TopRated from "./src/pages/TopRated";
import FilmDetails from "./src/pages/FilmDetails/FilmDetails";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/toprated",
    element: <TopRated />,
  },
  {
    path:"/toprated/details/:filmId",
    element:<FilmDetails />,
  }
]);
