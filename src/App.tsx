import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/RouteComponent";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
