import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BooksList } from "@/components/books-list.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ModeToggle } from "@/components/toggle-mode.tsx";
import { CreateBookForm } from "@/components/create-book-form";
import { CreateBookDialog } from "./components/create-book-dialog";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
	const [openEditDialog, setOpenEditDialog] = useState(false);
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div className={"container flex flex-col my-8"}>
					<div className="flex justify-between space-x-6">
						<CreateBookDialog
							form={
								<CreateBookForm closeDialog={() => setOpenEditDialog(false)} />
							}
							open={openEditDialog}
							setDialogVisible={setOpenEditDialog}
						/>
						<ModeToggle />
					</div>

					<div className={"mt-10"}>
						<BooksList />
					</div>
				</div>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
