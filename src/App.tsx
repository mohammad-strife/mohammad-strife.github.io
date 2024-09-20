import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Private Routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
