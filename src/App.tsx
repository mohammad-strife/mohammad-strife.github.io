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
import NewTicketPage from "./pages/tickets/NewTicketPage";
import MyTicketsPage from "./pages/tickets/MyTicketsPage";
import ViewTicketPage from "./pages/tickets/ViewTicketPage";
import ArticlePage from "./pages/articles/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewExperience from "./pages/articles/NewExperience";
import PublishArticle from "./pages/articles/PublishArticle";
import MyPublishedArticles from "./pages/articles/MyPublishedArticles";
import ArticlesPage from "./pages/articles/ArticlesPage";

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
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/new-experience" element={<NewExperience />} />
          <Route path="/publish-article" element={<PublishArticle />} />
          <Route path="/published-article" element={<MyPublishedArticles />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
