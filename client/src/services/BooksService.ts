import { type AxiosResponse } from "axios";
import { BookTypeWithoutId, type BookType } from "@/types/book.ts";
import { api } from "@/http/api.ts";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class BookService {
	public static getAll(): Promise<AxiosResponse<BookType[]>> {
		return api.get<BookType[]>("/books");
	}

	public static getById(id: number): Promise<AxiosResponse<BookType>> {
		return api.get<BookType>(`/books/${id}`);
	}

	public static create(
		book: BookTypeWithoutId,
	): Promise<AxiosResponse<BookType>> {
		return api.post<BookType>("/books", book);
	}

	public static update(
		id: number,
		book: BookTypeWithoutId,
	): Promise<AxiosResponse<BookType>> {
		return api.put<BookType>(`/books/${id}`, book);
	}

	public static delete(id: number): Promise<AxiosResponse<BookType>> {
		return api.delete<BookType>(`/books/${id}`);
	}
}
