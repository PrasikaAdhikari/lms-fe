import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import "./App.css";
import Login from "./pages/Login";
import DefaultLayout from "./components/layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import Auth from "./auth/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          {/* <h1>Your Library</h1> */}
          <Routes>
            <Route path="*" element={<DefaultLayout />}>
              {/* Public */}
              <Route path="login" element={<Login />} />
              {/* Login */}

              {/* signup */}
              <Route path="signup" element={<Signup />} />
            </Route>

            {/* Private  */}
            {/* dashboard */}
            {/* <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            /> */}
            {/* transaction */}
            {/* <Route
              path="transaction"
              element={
                <Auth>
                  <Transaction />
                </Auth>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
