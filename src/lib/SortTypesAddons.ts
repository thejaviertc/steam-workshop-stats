export type SortType =
	| "latest"
	| "views"
	| "subscribers"
	| "favorites"
	| "likes"
	| "dislikes";

export const defaultSortType: SortType = "subscribers";

export const sortTypeOptions: SortType[] = [
	"latest",
	"views",
	"subscribers",
	"favorites",
	"likes",
	"dislikes",
];
