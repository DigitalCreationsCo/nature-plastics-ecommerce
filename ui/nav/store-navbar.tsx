import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";

export const StoreNavbar = async () => {
	return (
		<header className="z-10 py-4 sticky top-0 bg-white/90 backdrop-blur-sm nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				<div className='w-72'></div>
				<div className="max-w-full flex grow w-auto sm:mr-auto overflow-auto max-sm:order-2 justify-center">
					<NavMenu />
				</div>
				<div className="mr-3 ml-auto sm:ml-0">
					<SearchNav />
				</div>
				<CartSummaryNav />
			</div>
		</header>
	);
};
