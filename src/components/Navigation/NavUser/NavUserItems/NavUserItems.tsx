import * as React from 'react';
import Paper from '@elementor/ui/Paper';
import { navUserItems } from '../../../../constants/menus';
import MenuItem from '@elementor/ui/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useFireUserEvent } from '../../../../api/user_events_api';
import { ILinkData } from '../../../../common/data-events/interfaces/nav-items.interface';
import AvatarMenuItem from './AvatarMenuItem/AvatarMenuItem';
import { Theme, styled } from '@elementor/ui';

const MenuItemStyle = styled( MenuItem )( ( { theme }: { theme: Theme } ) => ( {
	fontSize: theme.typography.subtitle2.fontSize,
	gap: 8
} ) );

const NavUserItems: React.FC = () => {
	const navigate = useNavigate();
	const { mutate: fireEvent } = useFireUserEvent();

	const onClickHandler = ( linkPath: ILinkData ) => {
		fireEvent( { event_name: linkPath.eventName } );
		navigate( linkPath.path, { state: linkPath?.tab } );
	};
	return (
		<Paper sx={{ width: '214px', px: 1.5 }} elevation={2}>
			<AvatarMenuItem/>
			{navUserItems.map( ( { displayText, icon, linkPath } ) => (
				<MenuItemStyle
					key={displayText}
					onClick={() => onClickHandler( linkPath )}>
					{icon}
					{displayText}
				</MenuItemStyle>
			) )}
		</Paper>
	);
};

export default NavUserItems;
