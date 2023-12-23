import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { MainPage, SignUpPage } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/signUp",
    Component: SignUpPage,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
