export type Course = {
	id: string;
	category: string;
	subcategory: string;
	title: string;
	slug: string;
	price: number;
	rating: number;
	reviewsCount: number;
	lessons: number;
	learners: number;
	level: string;
	images: { thumb: string };
	isFavorited?: boolean;
	badge?: string | null;
};

export type MenuSubcategory = { id: number; name: string };
export type MenuCategory = {
	id: number;
	name: string;
	subcategories: MenuSubcategory[];
};
