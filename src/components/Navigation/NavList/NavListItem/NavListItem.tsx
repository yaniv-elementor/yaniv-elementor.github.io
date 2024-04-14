import ListItem, { ListItemProps } from '@elementor/ui/ListItem';
import ListItemButton from '@elementor/ui/ListItemButton';
import ListItemIcon from '@elementor/ui/ListItemIcon';
import ListItemText from '@elementor/ui/ListItemText';
import * as React from 'react';
import routerLink from '../../../../assets/components/RouterLink';
import { useLocation } from 'react-router-dom';
import { Theme, styled, useTheme } from '@elementor/ui';
import { ILinkData } from '../../../../common/data-events/interfaces/nav-items.interface';
import { useFireUserEvent } from '../../../../api/user_events_api';


interface NavListItemProps extends ListItemProps {
	isOpen: boolean;
	isSubMenuOpen: boolean;
	displayText: string;
	onClickHandler?: ( e: React.MouseEvent<HTMLLIElement, MouseEvent> ) => void;
	icon?: JSX.Element;
	customProps?: any; // eslint-disable-line
	linkPath?: ILinkData;
	hasSubItems: string[];
}

const StyledListItemButton = styled( ListItemButton, { shouldForwardProp: prop => prop !== 'isOpen' && prop !== 'selected' } )
( ( { theme, isOpen, selected }: { theme: Theme, isOpen: boolean, selected: boolean } ) => ( {
	justifyContent: isOpen ? 'initial' : 'center',
	padding: theme.spacing( 1, 2 ),
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


const NavListItem: React.FC<NavListItemProps> = ( {
	children,
	isOpen,
	displayText,
	onClickHandler,
	icon,
	sx,
	customProps,
	linkPath,
	hasSubItems = [],
	isSubMenuOpen } ) => {
	const theme = useTheme();
	const location = useLocation();
	// checks if the parent item should be selected, changes if the navigation is open, changes if the sub menu is open
	const isSelected = ( hasSubItems.indexOf( location.pathname ) !== -1 ) ? !isOpen ? true : ( isOpen && !isSubMenuOpen ) : ( linkPath?.path === location.pathname );
	const linkProps = linkPath && ( hasSubItems.indexOf( location.pathname ) === -1 ) ? { component: routerLink, to: linkPath.path } : {};
	const { mutate: fireEvent } = useFireUserEvent();

	const handleClick = ( e: React.MouseEvent<HTMLLIElement, MouseEvent> ) => {
		linkPath && fireEvent( { event_name: linkPath.eventName } );
		if ( onClickHandler ) onClickHandler( e );
	};

	return <ListItem disablePadding sx={{ display: 'block', ...sx }}>
		<StyledListItemButton onClick={handleClick}
			theme={theme}
			isOpen={isOpen}
			selected={isSelected}
			{...linkProps}
			{...customProps}>
			<StyledListItemIcon isOpen={isOpen} theme={theme}>
				{icon}
			</StyledListItemIcon>
			<StyledListItemText isOpen={isOpen} primary={displayText} theme={theme} />
			{isOpen ? children : null}
		</StyledListItemButton>
	</ListItem>;
};

export default NavListItem;
