import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./Context/MyContext";
import { initialState } from "./Data/Data";
import router from "./Routes/Routes.jsx";

function App() {
  return (
    <>
      <ContextProvider value={initialState}>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
