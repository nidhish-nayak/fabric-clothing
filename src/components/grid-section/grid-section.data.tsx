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
		imageUrl: "https://ik.imagekit.io/fabric01/Escape.webp",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://ik.imagekit.io/fabric01/Olive-Faux-Jacket.webp",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "shoes",
		imageUrl: "https://ik.imagekit.io/fabric01/Jordan-Max-Aura-4.webp",
		route: "shop/shoes",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://ik.imagekit.io/fabric01/Directory-2.webp",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://ik.imagekit.io/fabric01/Directory-1.webp",
		route: "shop/mens",
	},
];
