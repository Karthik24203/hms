import react, { useState } from "react";
import Login from "./student/Pages/Login";
import Home from "./student/Pages/Home";
import Sidebar from "./student/components/Sidebar/Sidebar";
import SignUp from "./student/Pages/Signin";
import DamageReport from "./student/components/DamageReport/DamageReport";
import LateArrival from "./student/components/LateArrival/LateArrival";
import LeaveRequest from "./student/components/Leaverequest/LeaveRequest";
import ComplainRequest from "./student/components/ComplainRequest/ComplainRequest";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LateRequest from "./Staff/Pages/Late";
import toast, { Toaster } from "react-hot-toast";
import Leave from "./Staff/Pages/Leave";
import Damage from "./Staff/Pages/Damage";
import Complain from "./Staff/Pages/Complain";
import Dashboard from "./student/Pages/Dashboard";
import StaffDashboard from "./Staff/Pages/StaffDashboard";
import { useAuthContext } from "./student/context/AuthContext";
import RequestDetail from "./Staff/components/RequestDetail";

function App() {
  const { authUser } = useAuthContext();
  const location = useLocation();

  // Array of paths where the Sidebar should be shown
  const sidebarPaths = [
    "/dashboard",
    "/leave",
    "/damage",
    "/complain",
    "/late",
  ];

  return (
    <>
      <div style={{ height: "100vh" }} className="flex overflow-y-scroll ">
        {sidebarPaths.includes(location.pathname) && authUser && <Sidebar />}
        <Routes>
          <Route
            path="/"
            element={authUser ? <Navigate to="/dashboard" /> : <Home />}
          />
          <Route
            path="/leave"
            element={authUser ? <LeaveRequest /> : <Navigate to="/login" />}
          />
          <Route
            path="/damage"
            element={authUser ? <DamageReport /> : <Navigate to="/login" />}
          />
          <Route
            path="/complain"
            element={authUser ? <ComplainRequest /> : <Navigate to="/login" />}
          />
          <Route
            path="/late"
            element={authUser ? <LateArrival /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/dashboard" /> : <SignUp />}
          />
          <Route
            path="/dashboard"
            element={authUser ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
