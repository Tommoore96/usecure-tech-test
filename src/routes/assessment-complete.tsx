import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assessment-complete")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /assessment-complete!";
}
