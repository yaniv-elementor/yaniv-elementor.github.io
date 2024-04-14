import ListItem, { ListItemProps } from '@elementor/ui/ListItem';
import ListItemButton from '@elementor/ui/ListItemButton';
import ListItemIcon from '@elementor/ui/ListItemIcon';
import ListItemText from '@elementor/ui/ListItemText';
import * as React from 'react';
import routerLink from '../../../../assets/components/RouterLink';
import { useLocation } from 'react-router-dom';
import { Theme, styled, useTheme } from '@elementor/ui';
import { useFireUserEvent } from '../../../../api/user_events_api';
import { ILinkData } from '../../../../common/data-events/interfaces/nav-items.interface';
interface NavListItemProps extends ListItemProps {
	isOpen: boolean;
	displayText: string;
	onClickHandler?: ( e: React.MouseEvent<HTMLLIElement, MouseEvent> ) => void;
	icon?: JSX.Element;
	customProps?: any; // eslint-disable-line
	linkPath: ILinkData;
}

const StyledListItemButton = styled( ListItemButton, { shouldForwardProp: prop => prop !== 'isOpen' && prop !== 'selected' } )
( ( { theme, isOpen, selected }: { theme: Theme, isOpen: boolean, selected: boolean } ) => ( {
	justifyContent: isOpen ? 'initial' : 'center',
	padding: theme.spacing( .5, 4.5 ),
	borderRadius: theme.shape.borderRadius * 2,
	backgroundColor: selected ? theme.palette.action.selected : 'transparent',
} ) );

const StyledListItemIcon = styled( ListItemIcon, { shouldForwardProp: prop => prop !== 'isOpen' } )( ( { theme, isOpen }: { theme: Theme, isOpen: boolean } ) => ( {
	minWidth: 0,
	marginRight: isOpen ? theme.spacing( 1 ) : 'auto',
	justifyContent: 'center',
} ) );

const StyledListItemText = styled( ListItemText, { shouldForwardProp: prop => prop !== 'isOpen' } )( ( { theme, isOpen }: { theme: Theme, isOpen: boolean } ) => ( {
	opacity: isOpen ? 1 : 0,
	'& p': { color: theme.palette.text.primary }
} ) );

const NavListItem: React.FC<NavListItemProps> = ( { children, isOpen, displayText, onClickHandler, icon, sx, customProps, linkPath } ) => {
	const location = useLocation();
	const isSelected = linkPath?.path === location.pathname;
	const theme = useTheme();
	const { mutate: fireEvent } = useFireUserEvent();

	const handleClick = ( e ) => {
		fireEvent( { event_name: linkPath.eventName } );
		if( onClickHandler ) onClickHandler( e );
	};

	return <ListItem disablePadding sx={{ display: 'block', ...sx }}>
		<StyledListItemButton
			onClick={handleClick}
			theme={theme}
			isOpen={isOpen}
			selected={isSelected}
			component={linkPath ? routerLink : 'button'}
			to={linkPath?.path ?? ''}
			{...customProps}>
			<StyledListItemIcon isOpen={isOpen} theme={theme}>
				{icon}
			</StyledListItemIcon>
			<StyledListItemText secondary={displayText} isOpen={isOpen} theme={theme} />
			{isOpen ? children : null}
		</StyledListItemButton>
	</ListItem>;
};

export default NavListItem;
