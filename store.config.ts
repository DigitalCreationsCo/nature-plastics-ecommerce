import DiningImage from "./public/img/compostable-dining.png";
import CleaningImage from "./public/img/compostable-cleaning.png";
import AccessoriesImage from "./public/img/compostable-accessories.png";

export const config = {
	categories: [
		{ name: "Dining", slug: "dining", image: DiningImage },
		{ name: "Cleaning", slug: "cleaning", image: CleaningImage },
		{ name: "Accessories", slug: "accessories", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com",
		facebook: "https://facebook.com",
	},

	contact: {
		email: "natureplastics01@gmail.com",
		phone: "+1 (570) 790 1185",
		address: "San Francisco, CA 94107",
	},
};

export type StoreConfig = typeof config;
export default config;
