import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogdetails from "./Components/BlogDetails/Blogdetails";
import { ContextProvider } from "./Components/Context/MyContext";
import MainComponents from "./Components/MainComponents";
import { initialState } from "./Data/Data";

function App() {
  return (
    <>
      <ContextProvider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainComponents />} />
            <Route path="/blog/:id" element={<Blogdetails />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
