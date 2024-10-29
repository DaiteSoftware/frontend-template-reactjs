import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import {PrivateRoute} from "./components/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
      <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </AuthProvider>
  );
}

export default App;
