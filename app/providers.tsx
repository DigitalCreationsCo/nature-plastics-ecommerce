"use client";

import { ThemeProvider } from "next-themes";
import { env, publicUrl } from "@/env.mjs";
import { Toaster } from "@/ui/shadcn/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-full flex-1 flex-col bg-white" vaul-drawer-wrapper="">
        {children}
      </div>
      <Toaster position="top-center" offset={10} />
      {env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          async
          src="/stats/script.js"
          data-host-url={publicUrl + "/stats"}
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      )}
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
