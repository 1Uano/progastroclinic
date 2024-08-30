import { createRootRoute } from "@tanstack/react-router";
import Layout from "../components/common/Layout/Layout.tsx";

export const Route = createRootRoute({
  component: () => <Layout />,
});
