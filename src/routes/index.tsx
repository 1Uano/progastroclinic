import { createFileRoute } from "@tanstack/react-router";
import Home from "../components/pages/Home/Home.tsx";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});
