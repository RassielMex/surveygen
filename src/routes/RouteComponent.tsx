import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import SurveyCreator from "../pages/SurveyCreator/SurveyCreator";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
  },
  { path: "create/:id", element: <SurveyCreator /> },
]);
