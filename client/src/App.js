import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AllTodos from "./components/AllTodos";
import PersonalTodos from "./components/PersonalTodos";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OtherTodos from "./components/OtherTodos";
import OfficialTodos from "./components/OfficialTodos";
import NewTask from "./components/NewTask";
import { useState } from "react";

const PrivateRoute = ({ isLoggedin, children }) => {
  console.log(isLoggedin);
  return isLoggedin ? children : <Navigate to="/login" />;
};

function App() {
  const [loggedin, setLoggedin] = useState(true);
  return (
    <div className="app">
      <div className="body_container">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/newtask"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <NewTask />
              </PrivateRoute>
            }
          />
          <Route
            path="/alltodos"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <AllTodos />
              </PrivateRoute>
            }
          />
          <Route
            path="/personaltodos"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <PersonalTodos />
              </PrivateRoute>
            }
          />
          <Route
            path="/officialtodos"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <OfficialTodos />
              </PrivateRoute>
            }
          />
          <Route
            path="/othertodos"
            element={
              <PrivateRoute isLoggedin={loggedin}>
                <OtherTodos />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
