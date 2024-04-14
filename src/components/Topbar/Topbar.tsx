import * as React from 'react';
import IconButton from '@elementor/ui/IconButton';
import Stack from '@elementor/ui/Stack';
import ExpandIcon from '../../assets/icons/expand-icon';
import NotificationIcon from '../../assets/icons/notification-icon';
import QuestionIcon from '../../assets/icons/question-icon';
import { ClickUserEventsEnum } from '../../common/data-events/enums/user-events.enum';
import { useFireUserEvent } from '../../api/user_events_api';

const Topbar: React.FC<any> = () => {
	const { mutate: fireEvent } = useFireUserEvent();

	const clickHandler = ( iconType: string ) => {
		let eventName: ClickUserEventsEnum = ClickUserEventsEnum.full_screen_clicked;
		switch ( iconType ) {
		case 'question':
			eventName = ClickUserEventsEnum.help_center_clicked;
			break;
		case 'notification':
			eventName = ClickUserEventsEnum.notification_center_clicked;
			break;
		}

		fireEvent( { event_name: eventName } );
	};

	return <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={1} sx={{ flex: '0 0 100%', px: 4, py: .5 }} >
		<IconButton onClick={() => clickHandler( 'question' )}>
			<QuestionIcon />
		</IconButton>
		<IconButton onClick={() => clickHandler( 'notification' )}>
			<NotificationIcon />
		</IconButton>
		<IconButton onClick={() => clickHandler( 'expand' )}>
			<ExpandIcon />
		</IconButton>
	</Stack>;
};
export default Topbar;
