import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Body/Home/Home";
import NewBlog from "../Components/NewBlog/NewBlog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/write",
    element: <NewBlog />,
  },
]);
export default router;
