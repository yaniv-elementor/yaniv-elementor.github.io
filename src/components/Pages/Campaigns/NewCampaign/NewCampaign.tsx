import Breadcrumbs from '@elementor/ui/Breadcrumbs';
import Link from '@elementor/ui/Link';
import Typography from '@elementor/ui/Typography';
import * as React from 'react';
import Button from '@elementor/ui/Button';
import { CAMPAIGNS, FROM_SCRATCH, NEW_CAMPAIGNS, appRoutes } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import { useFireUserEvent } from '../../../../api/user_events_api';
import { ClickUserEventsEnum } from '../../../../common/data-events/enums/user-events.enum';

const NewCampaign: React.FC<any> = () => {
	const { mutate: fireEvent } = useFireUserEvent();
	const onClickHandler = () => {
		fireEvent( { event_name: ClickUserEventsEnum.create_campaign_from_scratch_clicked } );
	};
	return <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
		<Breadcrumbs aria-label="breadcrumb" sx={{ alignItems: 'end' }}>
			<Link underline="hover" color="inherit" href={appRoutes.campaigns} variant='body1'>
				{CAMPAIGNS}
			</Link>
			<Typography variant='h4'>{NEW_CAMPAIGNS}</Typography>
		</Breadcrumbs>
		<Button variant={'outlined'} onClick={onClickHandler}>{FROM_SCRATCH}</Button>
	</Stack>;
};

export default NewCampaign;
