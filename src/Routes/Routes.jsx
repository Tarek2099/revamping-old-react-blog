import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import About from "../pages/About/About.jsx";
import Blogs from "../pages/Blog/Blogs.jsx";
import Blogsdetails from "../pages/BlogDetails/Blogdetails.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Home from "../pages/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog/:id",
        element: <Blogsdetails />,
      },
      // {
      //   path: "category/:category",
      //   element: <CategorizedPost />,
      // },
    ],
  },
]);
export default router;
