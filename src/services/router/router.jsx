import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/home";
import About from "../../pages/About/about";
import Contact from "../../pages/Contact/contact";
import Movies from "../../components/Movies/movies";
import MoviesDetalis from "../../components/Movies/MoviesDetalis";
import NotFound from "../../pages/notFound/notFound";
import Error from "../../pages/errors/notFound";
import MainLayout from "../../components/Layout/mainLayout";
import FavoriteMovies from "../../components/Movies/FavoriteMovies";
import Login from "../../pages/auth/login";
import RegisterHookForm from "../../pages/auth/reg";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movies",
        element: <Movies />,
        errorElement: <Error />,
      },
      {
        path: "/moviesdetails/:id",
        element: <MoviesDetalis />,
        errorElement: <Error />,
      },
      {
        path: "/Favoritemovies",
        element: <FavoriteMovies />,
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterHookForm />,
  },
]);
