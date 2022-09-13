import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedin, children }) => {
  return isLoggedin ? children : <Navigate to="/login" />;
};

const NestedRoute = ({ isLoggedin, children }) => {
  return (
    <Route
      path="/"
      element={<PrivateRoute isLoggedin={isLoggedin}>{children}</PrivateRoute>}
    />
  );
};

function App() {
  return (
    <div className="app">
      <div className="body_container">
        <Routes>
          <Route path="/signup" element={<p>signup</p>} />
          <Route path="/login" element={<p>login</p>} />
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
