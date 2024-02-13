export type BookType = {
	id: number;
	author: string;
	title: string;
	yearOfPublishing: string;
	pageCount: number;
	remainCount: number;
};

export type BookTypeWithoutId = Omit<BookType, "id">;
