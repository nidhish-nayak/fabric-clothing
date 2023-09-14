export type ItemsType = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	quantity?: number;
};

export type CategoriesType = {
	items: ItemsType[];
	title: string;
};

export type CategoriesMapType = {
	[key: string]: ItemsType[];
};

export type CategoriesStateType = {
	readonly categories: CategoriesType[];
	readonly isLoading: boolean;
	readonly error?: Error | null | unknown;
};
