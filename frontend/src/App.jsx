import React, { StrictMode } from "react";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar";
import Otp from "./pages/Otp/Otp";
import SignUp from "./pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/RequireAuth";
import usersList from "./features/users/usersList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import SavedPage from "./pages/SavedPage/SavedPage";
import Chat from "./pages/Chat/Chat";
import AdminLogin from "./pages/AdminPages/Login";
import AdminHomePage from "./pages/AdminPages/HomePage";

function App() {
  return (
    <StrictMode>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        />
        {/* public routes */}

        {/* <Route index 
         
          element={< />}
        /> */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<SignUp />}
        />
        <Route
          path="/otpVerify"
          element={<Otp />}
        />
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
        <Route
          path="/admin/dashboard"
          element={<AdminHomePage />}
        />

        <Route
          path="profile"
          element={<ProfilePage />}
        />
        <Route
          path="propertyDetails/:id"
          element={<PropertyPage />}
        />
        <Route
          path="saved"
          element={<SavedPage />}
        />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route
            path="home"
            element={<HomePage />}
          />
          {/* <Route
          path="property"
          element={<PropertyPage />}
        /> */}
          <Route
            path="userslist"
            element={<usersList />}
          />
          <Route
            path="chat"
            element={<Chat />}
          />
        </Route>
      </Routes>
    </StrictMode>

    // <div>
    //   <SignUp />
    // </div>
  );
}

export default App;
