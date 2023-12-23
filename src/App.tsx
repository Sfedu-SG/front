import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { MainPage, SignUpPage, SignInPage } from "./pages";
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
  {
    path: "/signIn",
    Component: SignInPage,
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
