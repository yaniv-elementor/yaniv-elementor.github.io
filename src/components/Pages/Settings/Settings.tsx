import Box from '@elementor/ui/Box';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Brand from './Brand/Brand';
import Billing from './Billing/Billing';
import Integration from './Integration/Integration';
import { INTEGRATION, BILLING, BRAND, FORM_INTEGRATIONS, SETTINGS, EMAIL_SMS_SETUP } from '../../../constants/textsJson';
import Tabs from '@elementor/ui/Tabs';
import Tab from '@elementor/ui/Tab';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import { ClickUserEventsEnum } from '../../../common/data-events/enums/user-events.enum';
import { useFireUserEvent } from '../../../api/user_events_api';

const SettingsPage: React.FC<any> = () => {
	return ( <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{EMAIL_SMS_SETUP}</Typography>
	</Stack> );
};

const Settings: React.FC<any> = () => {
	const location = useLocation();
	const [ currentTab, setCurrentTab ] = React.useState( location.state || SETTINGS );
	const { mutate: fireEvent } = useFireUserEvent();

	const handleChange = ( event: React.SyntheticEvent<Element, Event>, newValue: string ) => {
		let eventName: ClickUserEventsEnum = ClickUserEventsEnum.settings_clicked;

		switch ( newValue ) {
		case BRAND:
			eventName = ClickUserEventsEnum.brand_clicked;
			break;
		case BILLING:
			eventName = ClickUserEventsEnum.billing_clicked;
			break;
		case INTEGRATION:
			eventName = ClickUserEventsEnum.forms_integrations_clicked;
			break;
		}
		fireEvent( { event_name: eventName } );

		setCurrentTab( newValue );
	};
	React.useEffect( () => {
		setCurrentTab( location.state || SETTINGS );

	}, [ location.state ] );
	return (
		<Box>
			<Stack sx={{ width: '100%' }} justifyContent={'center'} alignItems={'center'}>
				<Tabs value={currentTab} onChange={handleChange}>
					<Tab label={BRAND} value={BRAND} />
					<Tab label={BILLING} value={BILLING} />
					<Tab label={FORM_INTEGRATIONS} value={INTEGRATION} />
					<Tab label={EMAIL_SMS_SETUP} value={SETTINGS} />
				</Tabs>
			</Stack>

			{currentTab === BRAND && <Brand />}
			{currentTab === BILLING && <Billing />}
			{currentTab === INTEGRATION && <Integration />}
			{currentTab === SETTINGS && <SettingsPage />}
		</Box>
	);
};

export default Settings;
