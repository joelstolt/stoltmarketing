import { hubMetadata } from "@/lib/local/hub-schema";

export const metadata = hubMetadata("lund");

export default function Layout({ children }) {
  return children;
}
