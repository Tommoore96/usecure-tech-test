import React from "react";
import Header from "../components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-dvh">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
