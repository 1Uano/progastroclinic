import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../components/pages/AboutUs/AboutUs.tsx";

export const Route = createFileRoute("/about-us")({
  component: () => <AboutUs />,
});
