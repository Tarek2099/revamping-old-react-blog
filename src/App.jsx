import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainComponents from "./Components/MainComponents";
import { ContextProvider } from "./Context/MyContext";
import { initialState } from "./Data/Data";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <ContextProvider value={initialState}>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainComponents />} />
            <Route path="/blog/:id" element={<Blogdetails />} />
          </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router}>
          <MainComponents />
        </RouterProvider>
      </ContextProvider>
    </>
  );
}

export default App;
