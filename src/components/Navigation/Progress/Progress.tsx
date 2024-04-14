import Box from '@elementor/ui/Box';
import Container from '@elementor/ui/Container';
import LinearProgress from '@elementor/ui/LinearProgress';
import Typography from '@elementor/ui/Typography';
import { Theme, styled, useTheme } from '@elementor/ui';
import * as React from 'react';
import RightArrowIcon from '../../../assets/icons/right-arrow-icon';
import { appRoutes } from '../../../constants/textsJson';
import { useNavigate } from 'react-router-dom';
import { useFireUserEvent } from '../../../api/user_events_api';
import { ClickUserEventsEnum } from '../../../common/data-events/enums/user-events.enum';

const iconHeight = 40;

type ProgressProps = {
	completed: number;
	isOpen?: boolean;
};

const ContainerStyle = styled( Container )( ( { theme }: { theme: Theme } ) => ( {
	display: 'flex',
	alignItems: 'flex-start',
	flexFlow: 'column wrap',
	justifyContent: 'center',
	height: '100%',
	paddingBottom: theme.spacing( 0.5 ),
} ) );

const TextStyle = styled( Typography )( () => ( {
	flex: '1 1 50%',
	display: 'flex',
	alignItems: 'center',
	width: `calc(100% - ${ iconHeight }px)`,
} ) );

const BoxStyle = styled( Box, { shouldForwardProp: prop => prop !== 'isOpen' } )( ( { theme, isOpen }: { theme: Theme, isOpen: boolean } ) => ( {
	padding: isOpen ? theme.spacing( 2 ) : theme.spacing( 1, 1, 2 ),
	height: isOpen ? '82px' : '60px',
	cursor: 'pointer',
} ) );

const Progress: React.FC<ProgressProps> = ( { completed, isOpen } ) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { mutate: fireEvent } = useFireUserEvent();

	const navigateClickHandler = () => {
		fireEvent( { event_name: ClickUserEventsEnum.Get_Started_Clicked } );
		navigate( appRoutes.start );
	};

	return <BoxStyle theme={theme} isOpen={isOpen || false} onClick={navigateClickHandler}>
		<ContainerStyle disableGutters>
			<TextStyle sx={{ display: isOpen ? 'flex' : 'none' }} variant="subtitle2" >Get Started</TextStyle>
			<TextStyle variant="caption" >
				<Box component={'span'} sx={{ lineHeight: 1 }}>{completed ?? 25}%</Box>
				<Box component={'span'} sx={{ pl: theme.spacing( .5 ), display: isOpen ? 'inline' : 'none' }} >completed</Box>
			</TextStyle>
			<RightArrowIcon sx={{ flex: '0 0 100%', maxHeight: `${ iconHeight }px` }} />
		</ContainerStyle>
		<LinearProgress
			value={completed}
			variant="determinate"
			color="info"
		/>
	</BoxStyle>;
};

export default Progress;
