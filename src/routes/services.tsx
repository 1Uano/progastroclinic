import { createFileRoute } from "@tanstack/react-router";
import Services from "../components/pages/Services/Services.tsx";

export const Route = createFileRoute("/services")({
  component: () => <Services />,
});
