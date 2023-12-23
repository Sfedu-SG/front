import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { MainPage } from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
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
