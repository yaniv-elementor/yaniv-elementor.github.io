import * as React from 'react';
import { CHATS, CHATS_TOP_CTA_TEXT } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import { ClickUserEventsEnum } from '../../../../common/data-events/enums/user-events.enum';
import { useFireUserEvent } from '../../../../api/user_events_api';
import Box from '@elementor/ui/Box';
import Button from '@elementor/ui/Button';
import RightArrowIcon from '../../../../assets/icons/right-arrow-icon';


const Chats: React.FC<any> = () => {
	const { mutate: fireEvent } = useFireUserEvent();

	const clickHandler = () => {
		fireEvent( { event_name: ClickUserEventsEnum.Add_Chat_Clicked } );
	};

	return <Stack sx={{ width: '100%' }} direction={'row'} flexWrap={'wrap'}>
		<Stack sx={{ flex: '0 0 100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
			<Typography variant={'h4'}>{CHATS}</Typography>
			<Button variant='contained' onClick={clickHandler} endIcon={<RightArrowIcon/>}>{CHATS_TOP_CTA_TEXT}</Button>
		</Stack>
		<Box onClick={() => fireEvent( { event_name: ClickUserEventsEnum.View_Chat_Clicked } )}
			sx={{ flex: '0 0 100%', height: '100%', backgroundColor: '#ddd' }}>
			<Typography variant={'h4'}>View Chat</Typography>
		</Box>
	</Stack>;
};

export default Chats;
