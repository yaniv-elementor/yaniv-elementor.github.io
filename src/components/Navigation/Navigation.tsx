import * as React from 'react';
import { styled, Theme, CSSObject } from '@elementor/ui/styles';
import Box from '@elementor/ui/Box';
import MuiDrawer from '@elementor/ui/Drawer';
import Divider from '@elementor/ui/Divider';
import NavHead from './NavHead/NavHead';
import Progress from './Progress/Progress';
import NavList from './NavList/NavList';
import NavUser from './NavUser/NavUser';

const drawerWidth = 248;

const openedMixin = ( theme: Theme ): CSSObject => ( {
	width: drawerWidth,
	transition: theme.transitions.create( 'width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	} ),
	overflowX: 'hidden',
} );

const closedMixin = ( theme: Theme ): CSSObject => ( {
	transition: theme.transitions.create( 'width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	} ),
	overflowX: 'hidden',
	width: `calc(${ theme.spacing( 10 ) } + 1px)`,
	[theme.breakpoints.up( 'sm' )]: {
		width: `calc(${ theme.spacing( 10 ) } + 1px)`,
	},
} );

const Drawer = styled( MuiDrawer, { shouldForwardProp: prop => prop !== 'isOpen' } )(
	( { theme, open } ) => ( {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...( open && {
			...openedMixin( theme ),
			'& .MuiDrawer-paper': openedMixin( theme ),
		} ),
		...( !open && {
			...closedMixin( theme ),
			'& .MuiDrawer-paper': closedMixin( theme ),
		} ),
	} ),
);

const paperStyle: CSSObject = ( {
	position: 'static',
	height: '100vh',

} );

const BoxStyle = styled( Box )( ( { theme }: { theme: Theme } ) => ( {
	backgroundColor: theme.palette.background.default,
	flex: '0 0 auto',
} ) );


const Navigation: React.FC = () => {
	const [ isOpen, setIsOpen ] = React.useState( false );
	const [ isPin, setIsPin ] = React.useState( false );
	const [ completed, setCompleted ] = React.useState( 25 ); // will be determined by the progress of the user later

	const mouseEnterHandler = () => {
		setIsOpen( true );
		setCompleted( 25 );
	};

	const mouseLeaveHandler = () => {
		!isPin && setIsOpen( false );
	};

	return (
		<BoxStyle onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
			<Drawer variant="permanent" open={isOpen} PaperProps={{ sx: paperStyle }}>
				<NavHead isOpen={isOpen} setIsOpen={setIsOpen} isPin={isPin} setIsPin={setIsPin} />
				{completed < 100 && <Progress completed={completed} isOpen={isOpen} />}
				<Divider />
				<NavList isOpen={isOpen} />
				<NavUser isOpen={isOpen} />
			</Drawer>
		</BoxStyle >
	);
};

export default Navigation;
