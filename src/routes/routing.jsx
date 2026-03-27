import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import PageHome from "../pages/PageHome";
import PagePortfolio from "../pages/PagePortfolio";
import PageContact from "../pages/PageContact";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "portfolio",
        element: <PagePortfolio />,
      },
      {
        path: "contact",
        element: <PageContact />,
      },
    ],
  },
]);

export default routing;
