import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./Pages/home";
import Register from "./Pages/register";
import Login from "./Pages/login";
import ArtPage from "./Pages/artPage";
import AuthorPage from "./Pages/authorPage";
import TypePage from "./Pages/typePage";
import useToken from "./hooks/useToken";
import GamePage from "./Pages/gamePage";
import ShufflePage from "./Pages/shufflePage";
import ArtsSaved from "./Pages/artsSavePage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <ProtectedRouteGuard>
                <Home />{" "}
              </ProtectedRouteGuard>
            }
          />
          <Route
            path="/art/:id"
            element={
              <ProtectedRouteGuard>
                <ArtPage />{" "}
              </ProtectedRouteGuard>
            }
          />
          <Route
            path="/author/:author"
            element={
              <ProtectedRouteGuard>
                <AuthorPage />{" "}
              </ProtectedRouteGuard>
            }
          />
          <Route
            path="/type/:type"
            element={
              <ProtectedRouteGuard>
                <TypePage />{" "}
              </ProtectedRouteGuard>
            }
          />

          <Route
            path="/game"
            element={
              <ProtectedRouteGuard>
                <GamePage />{" "}
              </ProtectedRouteGuard>
            }
          />
          <Route
            path="/shuffle"
            element={
              <ProtectedRouteGuard>
                <ShufflePage />{" "}
              </ProtectedRouteGuard>
            }
          />
          <Route
            path="/artsSaved"
            element={
              <ProtectedRouteGuard>
                <ArtsSaved />{" "}
              </ProtectedRouteGuard>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default App;
