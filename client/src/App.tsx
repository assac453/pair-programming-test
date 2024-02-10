import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import {Book} from "@/components/book.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<div>
					<Book />
				</div>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
