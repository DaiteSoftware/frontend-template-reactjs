import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";

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
