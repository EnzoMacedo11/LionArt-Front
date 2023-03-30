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

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/art/:id" element={<ArtPage/>}/>
          <Route path="/author/:author" element={<AuthorPage/>}/>
          <Route path="/type/:type" element={<TypePage/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
