"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BookService } from "@/services/BooksService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookTypeWithoutId } from "@/types/book";

const formSchema = z.object({
	author: z.string().min(1),
	title: z.string().min(2),
	yearOfPublishing: z.string().length(4),
	pageCount: z.coerce.number(),
	remainCount: z.coerce.number(),
});

type InputProps = {
	name: "author" | "title" | "yearOfPublishing" | "pageCount" | "remainCount";
	title: "author" | "title" | "yearOfPublishing" | "pageCount" | "remainCount";
	placeholder:
		| "author"
		| "title"
		| "yearOfPublishing"
		| "pageCount"
		| "remainCount";
};

export function CreateBookForm() {
	const queryClient = useQueryClient();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			author: "",
			title: "",
			yearOfPublishing: "",
			pageCount: 0,
			remainCount: 0,
		},
	});

	const { mutate: createBook } = useMutation({
		mutationKey: ["create", "book"],
		mutationFn: (book: BookTypeWithoutId) => BookService.create(book),
		onSuccess() {
			queryClient.refetchQueries({ queryKey: ["get", "books"] });
			form.reset();
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		createBook(values);
	}

	const fields: InputProps[] = [
		{
			name: "author",
			title: "author",
			placeholder: "author",
		},
		{
			name: "title",
			title: "title",
			placeholder: "title",
		},
		{
			name: "yearOfPublishing",
			title: "yearOfPublishing",
			placeholder: "yearOfPublishing",
		},
		{
			name: "pageCount",
			title: "pageCount",
			placeholder: "pageCount",
		},
		{
			name: "remainCount",
			title: "remainCount",
			placeholder: "remainCount",
		},
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex space-x-6">
					{fields.map((inputData) => (
						<FormField
							control={form.control}
							name={inputData.name}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{inputData.title}</FormLabel>
									<FormControl>
										<Input placeholder={inputData.placeholder} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
				</div>
				<Button type="submit">Create book</Button>
			</form>
		</Form>
	);
}
