import { Routes, Route } from "react-router-dom";

/* PUBLIC */
import Landing from "./pages/LandingPage/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

/* MEMBER */
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Workouts from "./pages/Workouts/Workouts";
import MyProfile from "../../MyProfile/MyProfile";

/* TRAINER */
import TrainerHome from "./pages/TrainerHome/TrainerHome";

function App() {
  return (
    <Routes>
      {/* ===== PUBLIC ===== */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* ===== MEMBER ===== */}
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/myprofile" element={<MyProfile />} />

      {/* ===== TRAINER ===== */}
      <Route path="/trainerhome" element={<TrainerHome />} />
    </Routes>
  );
}

export default App;
