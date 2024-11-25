import React from "react";
import Header from "../components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-dvh">
      <Header />
      <div className="flex-1 px-4 sm:px-12">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
