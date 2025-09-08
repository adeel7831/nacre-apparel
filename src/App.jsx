import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact-us",
            element: <Contact />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
    {
      basename: "/nacre-apparel",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
