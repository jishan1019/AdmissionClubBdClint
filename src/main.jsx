import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Layout/ErrorLayout/ErrorPage.jsx";
import Home from "./Layout/HomeLayout/Home/Home.jsx";
import Collage from "./Layout/CollageLayout/Collage/Collage.jsx";
import Admission from "./Layout/AdmissionLayout/Admission/Admission.jsx";
import MyCollage from "./Layout/MyCollageLayout/MyCollage/MyCollage.jsx";
import Login from "./Layout/UserLayout/Login/Login.jsx";
import Regestation from "./Layout/UserLayout/Regestation/Regestation.jsx";
import AuthProvider from "./Layout/SecurityLayout/AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collage",
        element: <Collage />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/myCollage",
        element: <MyCollage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regestation",
        element: <Regestation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
