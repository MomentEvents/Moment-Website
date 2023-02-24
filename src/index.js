import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/privacy policy/PrivacyPolicy";
import TermsOfService from "./pages/terms of service/TermsOfService";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundRedirect from "./pages/404/NotFoundRedirect";
import NotFound from "./pages/404/NotFound";
import IOSDownload from "./pages/ios download/IOSDownload";
import AndroidDownload from "./pages/android download/AndroidDownload";
import Contact from "./pages/contact/Contact";
import Discord from "./pages/discord/Discord";
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/ios",
    element: <IOSDownload/>,
  },
  {
    path: "/android",
    element: <AndroidDownload/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "/terms",
    element: <TermsOfService/>,
  },
  {
    path: "/discord",
    element: <Discord/>,
  },
  {
    path: "/*",
    element: <NotFound/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
