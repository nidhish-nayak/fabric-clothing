export type GridCategoriesType = {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
};

export const gridCategories: GridCategoriesType[] = [
	{
		id: 1,
		title: "hats",
		imageUrl: "https://i.ibb.co/TvqVc28/Escape.webp",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://i.ibb.co/h1F4yvr/Olive-Faux-Jacket.webp",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "shoes",
		imageUrl: "https://i.ibb.co/sVCCkBZ/Jordan-Max-Aura-4.webp",
		route: "shop/shoes",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://i.ibb.co/TBxrTQh/Directory-2.webp",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://i.ibb.co/7KMFZHy/Directory-1.webp",
		route: "shop/mens",
	},
];
