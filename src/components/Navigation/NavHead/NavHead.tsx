import React from 'react';
import IconButton from '@elementor/ui/IconButton';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import CollapseIcon from '../../../assets/icons/collapse-icon';
import LogoIcon from '../../../assets/icons/logo-icon';
import { styled } from '@elementor/ui';
import SideMenuIcon from '../../../assets/icons/side-menu-icon';

type NavHeadProps = {
	isOpen: boolean;
	setIsOpen: ( open: boolean ) => void;
	isPin: boolean;
	setIsPin: ( pin: boolean ) => void;
}

const DrawerHeader = styled( 'div' )( ( { theme } ) => ( {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: theme.spacing( 0, 1.5 ),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
} ) );

const NavHead: React.FC<NavHeadProps> = ( { isOpen, setIsOpen, isPin, setIsPin } ) => {

	const handleDrawerClose = () => {
		setIsOpen( false );
		setIsPin( false );
	};

	const handleDrawerPin = () => {
		setIsPin( true );
	};

	const renderIcon = () => {
		if ( isOpen ) {
			if ( isPin ) {
				return (
					<IconButton onClick={handleDrawerClose}>
						<CollapseIcon />
					</IconButton> );
			}
			return (
				<IconButton onClick={handleDrawerPin}>
					<SideMenuIcon />
				</IconButton>
			);
		}
	};

	return (
		<DrawerHeader>
			<Stack alignItems='center' direction={'row'}>
				<LogoIcon />
				<Typography variant="h6" noWrap sx={{ ml: 1 }}>MP</Typography>
			</Stack>
			{renderIcon()}
		</DrawerHeader>
	);
};

export default NavHead;
