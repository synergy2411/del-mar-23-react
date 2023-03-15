import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import FeelingForm from "./Components/FeelingForm/FeelingForm";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/the-form" element={<FeelingForm />} />
        <Route path="/auth/*" element={<Auth />} >
          <Route path="sign-up" element={<Register />} />
          <Route path="sign-in" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
