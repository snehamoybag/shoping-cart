import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import ErrorElement from "./components/ErrrorElement.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <ErrorElement
        heading={"Error 404: Page not found!"}
        description={
          "Oops... The page you are looking for does not exist or has been removed."
        }
      />
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "item/:itemId",
        element: <ItemPage />,
      },
    ],
  },
];

export default routes;
