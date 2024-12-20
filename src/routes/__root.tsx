import React from "react";
import Header from "../components/header";
import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-dvh">
      <Header />
      <Outlet />
    </div>
  ),
  beforeLoad: (ctx) => {
    ctx.location.pathname === "/" && redirect({ to: "/slides/1", throw: true });
  },
});
