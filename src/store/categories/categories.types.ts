export type Items = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type Categories = {
	items?: Items[];
	title?: string;
};

export type CategoriesState = {
	readonly categories: Categories[];
	readonly isLoading: boolean;
	readonly error?: Error | null | unknown;
};

export type CategoriesSelector = {
	categories: CategoriesState;
};
