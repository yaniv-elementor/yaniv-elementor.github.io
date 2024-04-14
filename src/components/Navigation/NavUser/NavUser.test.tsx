import { render, fireEvent, waitFor } from '@testing-library/react';
import NavUser from './NavUser';
import { ACCOUNT, BRAND } from '../../../constants/textsJson';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';

describe('NavUser component', () => {
	const queryClient = new QueryClient();
	it('renders without crashing', () => {
		const { getByText } = render(<QueryClientProvider client={queryClient}><MemoryRouter><NavUser isOpen={true} /></MemoryRouter></QueryClientProvider>);
		const accountText = getByText(ACCOUNT);
		expect(accountText).toBeInTheDocument();
	});

	it('opens the menu when clicked', () => {
		const { getByText, queryByText } = render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<NavUser isOpen={false} />
				</MemoryRouter>
			</QueryClientProvider>);
		const accountText = getByText(ACCOUNT);
		fireEvent.click(accountText);
		const firstMenuItemTest = queryByText(BRAND);
		expect(firstMenuItemTest).toBeInTheDocument();
	});

	it('closes the menu when clicked outside', async () => {
		const { getByText, queryByText } = render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter><NavUser isOpen={true} />
				</MemoryRouter>
			</QueryClientProvider>);
		const accountText = getByText(ACCOUNT);
		fireEvent.click(accountText);
		const firstMenuItemTest = queryByText(BRAND);
		expect(firstMenuItemTest).toBeInTheDocument();
		fireEvent.click(accountText);
		await waitFor(() => {
			setTimeout(() => {
				expect(queryByText(BRAND)).not.toBeInTheDocument();
			}, 300);
		});

	});

});
