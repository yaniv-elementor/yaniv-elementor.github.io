import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Overview from '../Pages/Overview/Overview';
import Campaigns from '../Pages/Campaigns/Campaigns';
import Chats from '../Pages/Assets/Chats/Chats';
import Forms from '../Pages/Assets/Forms/Forms';
import Libraries from '../Pages/Assets/Libraries/Libraries';
import Start from '../Pages/Start/Start';
import Container from '@elementor/ui/Container';
import Contacts from '../Pages/Audience/Contacts/Contacts';
import Lists from '../Pages/Audience/Lists/Lists';
import Box from '@elementor/ui/Box';
import Stack from '@elementor/ui/Stack';
import Divider from '@elementor/ui/Divider';
import { styled } from '@elementor/ui';
import Settings from '../Pages/Settings/Settings';
import NewCampaign from '../Pages/Campaigns/NewCampaign/NewCampaign';
import { appRoutes } from '../../constants/textsJson';

const ContainerStyled = styled( Container )( () => ( {
	display: 'flex',
	alignItems: 'flex-start',
	flexFlow: 'row wrap',
	justifyContent: 'center',
	margin: 0,
	height: '100vh',
} ) );

const StackStyled = styled( Stack )( () => ( {
	flex: '1 1 calc(100% - 248px)',
} ) );

const Layout: React.FC = () => {

	return (
		<Box>
			<Router>
				<ContainerStyled component='div' disableGutters={true} maxWidth={false}>
					<Navigation />
					<StackStyled direction={'row'} flexWrap={'wrap'} alignItems={'flex-start'}>
						<Topbar />
						<Divider sx={{ flex: '0 0 100%' }}/>
						<Box component="main" sx={{ flex: '1 1 auto', p: 3 }}>
							<Routes>
								<Route path={appRoutes.start} element={<Start />} />
								<Route path={appRoutes.overview} element={<Overview />} />
								<Route path={appRoutes.contacts} element={<Contacts />} />
								<Route path={appRoutes.lists} element={<Lists />} />
								<Route path={appRoutes.campaigns} element={<Campaigns />} />
								<Route path={appRoutes.newCampaign} element={<NewCampaign />} />
								<Route path={appRoutes.chats} element={<Chats />} />
								<Route path={appRoutes.forms} element={<Forms />} />
								<Route path={appRoutes.libraries} element={<Libraries />} />
								<Route path={appRoutes.settings} element={<Settings />} />
							</Routes>
						</Box>
					</StackStyled>
				</ContainerStyled>
			</Router>
		</Box>
	);
};

export default Layout;
