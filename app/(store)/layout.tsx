import "@/app/globals.css";
import { CartModalProvider } from "@/context/cart-modal";
import { Footer } from "@/ui/footer/footer";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/json-ld";
import { StoreNavbar } from "@/ui/nav/store-navbar";
import { TooltipProvider } from "@/ui/shadcn/tooltip";
import * as Commerce from "commerce-kit";
import { CartModalPage } from "./cart/cart-modal";
import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

async function sharedMetaData(params) {
	const settings = await getSettings();
  
	return {
	  // enable this for resolving opengraph image
	  metadataBase: new URL(settings.url),
	  title: {
		default:
		  settings?.title ||
		  "PlantBasedBrands.com | Eco-friendly essentials for sustainable living and a greener home.",
		template: "%s | PlantBasedBrands.com"
	  },
	  description:
		settings?.description ||
		"Shop eco-friendly, compostable and natural goods for your home. Our products combine style, durability, and sustainability to reduce waste and promote a healthier planet. ",
	  keywords: ["Eco-friendly", "Compostable", "Natural", "Sustainable", "Home", "Goods", "Plant-based", "Plastics"],
	  authors: [{ name: "RPK & PlantBasedBrands.com" }],
	  canonical: settings?.url,
	  openGraph: {
		images: [
		  {
			url:
			  urlForImage(settings?.openGraphImage)?.src ||
			  "/img/opengraph.jpg",
			width: 800,
			height: 600
		  }
		]
	  },
	  twitter: {
		title: settings?.title || "PlantBasedBrands.com | Eco-friendly Home Goods",
		card: "summary_large_image"
	  },
	  robots: {
		index: true,
		follow: true
	  }
	};
  }
  
export async function generateMetadata({ params }) {
return await sharedMetaData(params);
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const accountResult = await Commerce.accountGet();
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<>
			{/* <CommerceGPT /> */}
			<CartModalProvider>
				<StoreNavbar />      
				<TooltipProvider>
					<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
						{children}
						<CartModalPage />
					</main>
					<Footer />
				</TooltipProvider>
			</CartModalProvider>
			<JsonLd
				jsonLd={accountToWebsiteJsonLd({
					account: accountResult?.account,
					logoUrl: logoLink?.url,
				})}
			/>
		</>
	);
}
