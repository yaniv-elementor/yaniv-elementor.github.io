import * as React from 'react';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from '@elementor/ui/styles';
import DirectionProvider from '@elementor/ui/DirectionProvider';
import CssBaseline from '@elementor/ui/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<DirectionProvider rtl={false}>
				<ThemeProvider colorScheme="auto">
					<CssBaseline />
					<Layout />
				</ThemeProvider>
			</DirectionProvider>
		</QueryClientProvider>
	);
}

export default App;
