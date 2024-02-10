import {useQuery} from "@tanstack/react-query";
import {api} from "@/http/api.ts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {BookType} from "@/types/book.ts";

export function Book() {
    const data:BookType = {
        id: 1,
        author: "Aleksey",
        title: "Kill neagers",
        pageCount: 1366,
        remainCount: 0,
        yearOfPublishing: "2024"
    }


    // const {data} = useQuery(
    //     {
    //         queryFn: () => api.get("/books/"), queryKey: ["get", "book", "1"]
    //     })
    //
    // console.log(data)

    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.author}, {data.yearOfPublishing}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Remain Count: {data.remainCount}</p>
                <p>Page Count: {data.pageCount}</p>
            </CardContent>
            <CardFooter>
                <p>{data.id}</p>
                <p>{data.pageCount}</p>
            </CardFooter>
        </Card>
    )

}