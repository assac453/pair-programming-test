import {useQuery} from "@tanstack/react-query";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {BookService} from "@/services/BooksService.ts";

export function Book() {
    const id = 2
    const {data, isPending, isError} = useQuery(
        {
            queryFn: () => BookService.getById(id), queryKey: ["get", "book", id]
        })

    const book = data?.data

    if(isPending) return <div>Loading...</div>
    if(isError) return <div>error</div>
    console.log(data)

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