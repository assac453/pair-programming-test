import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {BookType} from "@/types/book.ts";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {BookService} from "@/services/BooksService.ts";

export function Book({book}:{book: BookType}) {

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey:["delete", "book", book.id],
        mutationFn: () => BookService.delete(book.id),
        onSuccess: () => {queryClient.refetchQueries({
            queryKey:["get", "book", book.id],
        } )}

    })
    const deleteBook = () => {
        mutate(book.id)
    }


    return (
        <Card
            className={"relative"}
        >
            <CardHeader>
                <CardTitle>{book?.title}</CardTitle>
                <CardDescription>{book?.author}, {book?.yearOfPublishing}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Remain Count: {book?.remainCount}</p>
                <p>Page Count: {book?.pageCount}</p>
                <Button
                    variant={"ghost"}
                    className={"absolute top-4 right-4"}
                    onClick={deleteBook}
                >
                    <XIcon />
                </Button>
            </CardContent>
            <CardFooter>
                <p>{book?.id}</p>
                <p>{book?.pageCount}</p>
            </CardFooter>
        </Card>
    )

}