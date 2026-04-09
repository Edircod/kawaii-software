import { redirect } from "next/navigation";

import { getInitialSettings } from "@/lib/request-context";

// Fallback for requests that bypass middleware (e.g. direct server invocation).
// Middleware handles the redirect in normal operation.
export default function RootPage() {
  const { locale } = getInitialSettings();
  redirect(`/${locale}`);
}
