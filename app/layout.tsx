import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import "@/app/globals.css";
import { publicUrl } from "@/env.mjs";
import { IntlClientProvider } from "@/i18n/client";
import { getLocale, getMessages, getTranslations } from "@/i18n/server";
import type { Metadata } from "next";
import SiteNavbar from "@/ui/nav/site-navbar";
import { getSettings } from "@/lib/sanity/client";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("Global.metadata");
	return {
		title: t("title"),
		description: t("description"),
		metadataBase: new URL(publicUrl),
	};
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
	const messages = await getMessages();
  const settings = await getSettings();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${cx(inter.variable, lora.variable)} h-full antialiased`}>
      <body className="flex min-h-full flex-col antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <IntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <SiteNavbar {...settings} />
            {children}
            </Providers>
        </IntlClientProvider>
      </body>
    </html>
  );
}
