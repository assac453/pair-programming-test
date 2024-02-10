import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex-1 flex flex-col items-center justify-center min-h-screen">
				<Button variant={"destructive"}>Delete all world!</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
