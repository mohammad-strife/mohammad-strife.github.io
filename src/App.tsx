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
import NewTicketPage from "./pages/NewTicketPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import ViewTicketPage from "./pages/ViewTicketPage";
import ArticlesPage from "./pages/ArticlesPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Private Routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-tickets">
            <Route index element={<MyTicketsPage />} />
            <Route path="new-ticket" element={<NewTicketPage />} />
            <Route path="view-ticket/:id" element={<ViewTicketPage />} />
          </Route>
          <Route path="/articles" element={<ArticlesPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
