import * as React from 'react';
import Menu from '@elementor/ui/Menu';
import MenuItem from '@elementor/ui/MenuItem';
import { ClickUserEventsEnum } from '../../common/data-events/enums/user-events.enum';
import { useFireUserEvent } from '../../api/user_events_api';

type DMProps = {
	anchorEl: null | HTMLElement;
	setAnchorEl: ( anchorEl: null | HTMLElement ) => void;
	menuItems: { displayName: string, clickHandler: any, eventName: ClickUserEventsEnum }[];
	buttonWidth?: number;
}

const DropdownMenu: React.FC<DMProps> = ( { anchorEl, setAnchorEl, menuItems, buttonWidth } ) => {
	const open = Boolean( anchorEl );
	const { mutate: fireEvent } = useFireUserEvent();

	const handleClose = ( clickHandler: any, eventName: ClickUserEventsEnum ) => {
		if ( clickHandler?.name === 'clickHandler' ) {
			fireEvent( { event_name: eventName } );
			clickHandler();
		}
		setAnchorEl( null );
	};

	return (
		<Menu
			PaperProps={{ sx:{ width: buttonWidth ? `${ buttonWidth }px` : 'inherit' } }}
			anchorEl={anchorEl}
			open={open}
			onClose={() => setAnchorEl( null )} >
			{menuItems?.map( ( item, index ) => (
				<MenuItem key={index} onClick={() => handleClose( item.clickHandler, item.eventName )}>
					{item.displayName}
				</MenuItem>
			) )}
		</Menu>
	);
};

export default DropdownMenu;
