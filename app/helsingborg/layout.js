import { hubMetadata } from "@/lib/local/hub-schema";

export const metadata = hubMetadata("helsingborg");

export default function Layout({ children }) {
  return children;
}
