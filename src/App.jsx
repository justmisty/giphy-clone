import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import GifPage from "./pages/GifPage";
import SearchPage from "./pages/SearchPage";
import Favorites from "./pages/Favorite";
import GifProvider from "./context/GifContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />;
    </GifProvider>
  );
};

export default App;
