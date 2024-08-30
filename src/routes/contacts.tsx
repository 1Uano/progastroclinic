import { createFileRoute } from "@tanstack/react-router";
import Contacts from "../components/pages/Contacts/Contacts.tsx";

export const Route = createFileRoute("/contacts")({
  component: () => <Contacts />,
});
