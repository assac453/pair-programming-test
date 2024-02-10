import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {BookType} from "@/types/book.ts";

export function Book({book}:{book: BookType}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{book?.title}</CardTitle>
                <CardDescription>{book?.author}, {book?.yearOfPublishing}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Remain Count: {book?.remainCount}</p>
                <p>Page Count: {book?.pageCount}</p>
            </CardContent>
            <CardFooter>
                <p>{book?.id}</p>
                <p>{book?.pageCount}</p>
            </CardFooter>
        </Card>
    )

}