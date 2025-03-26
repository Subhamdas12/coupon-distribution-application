import "./App.css";
import AuthAdmin from "./auth/AuthAdmin";
import CreateCoupon from "./components/CreateCoupon";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import CouponsAvailable from "./containers/CouponsAvailable";
import LandingPage from "./containers/LandingPage";
import Claims from "./pages/Claims";
import Coupons from "./pages/Coupons";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <AuthAdmin>
                <Dashboard />
              </AuthAdmin>
            }
          />
          <Route
            path="/coupons"
            element={
              <AuthAdmin>
                <Coupons />
              </AuthAdmin>
            }
          />
          <Route
            path="/users"
            element={
              <AuthAdmin>
                <Users />
              </AuthAdmin>
            }
          />
          <Route
            path="/claims"
            element={
              <AuthAdmin>
                <Claims />
              </AuthAdmin>
            }
          />
          <Route
            path="/createCoupon"
            element={
              <AuthAdmin>
                <CreateCoupon />
              </AuthAdmin>
            }
          />
          <Route path="/couponsAvailable" element={<CouponsAvailable />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
