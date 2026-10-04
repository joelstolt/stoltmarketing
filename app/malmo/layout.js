import { hubMetadata } from "@/lib/local/hub-schema";

export const metadata = hubMetadata("malmo");

export default function Layout({ children }) {
  return children;
}
