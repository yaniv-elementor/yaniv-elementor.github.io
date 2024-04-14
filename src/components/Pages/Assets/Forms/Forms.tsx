import * as React from 'react';
import { FORMS, FORMS_TOP_CTA_TEXT } from '../../../../constants/textsJson';
import Typography from '@elementor/ui/Typography';
import Stack from '@elementor/ui/Stack';
import { ClickUserEventsEnum } from '../../../../common/data-events/enums/user-events.enum';
import { useFireUserEvent } from '../../../../api/user_events_api';
import Box from '@elementor/ui/Box';
import RightArrowIcon from '../../../../assets/icons/right-arrow-icon';
import Button from '@elementor/ui/Button';



const Forms: React.FC<any> = () => {
	const { mutate: fireEvent } = useFireUserEvent();

	const clickHandler = () => {
		fireEvent( { event_name: ClickUserEventsEnum.add_form_clicked } );
	};
	return <Stack sx={{ width: '100%' }} direction={'row'} flexWrap={'wrap'}>
		<Stack sx={{ flex: '0 0 100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
			<Typography variant={'h4'}>{FORMS}</Typography>
			<Button variant='contained' onClick={clickHandler} endIcon={<RightArrowIcon/>}>{FORMS_TOP_CTA_TEXT}</Button>
		</Stack>
		<Box onClick={() => fireEvent( { event_name: ClickUserEventsEnum.view_form_clicked } )}
			sx={{ flex: '0 0 100%', height: '100%', backgroundColor: '#ddd' }}>
			<Typography variant={'h4'}>View Form</Typography>
		</Box>
	</Stack>;
};

export default Forms;
