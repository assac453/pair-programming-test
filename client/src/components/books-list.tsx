import {useQuery} from "@tanstack/react-query";
import {BookService} from "@/services/BooksService.ts";
import {Book} from "@/components/book.tsx";


export function BooksList() {
    const {data, isError, isPending} = useQuery({
        queryKey: ["get", "books"],
        queryFn: () => BookService.getAll()
    })

    const books = data?.data
    if (isError) return <div>Error</div>
    if (isPending) return <div>Loading...</div>

    return <div className={"flex flex-col gap-4"}>
        {books?.map(book => <Book book={book} key={book.id}/>)}
    </div>
}