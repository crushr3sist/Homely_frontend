import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import PlayerPage from "./pages/playerPage";
import DigestPage from "./pages/digestPage";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/player",
    element: <PlayerPage />,
  },
  {
    path: "/digest",
    element: <DigestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RouterProvider router={router}></RouterProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
