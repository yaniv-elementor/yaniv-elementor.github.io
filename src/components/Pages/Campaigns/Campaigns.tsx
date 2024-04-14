import Stack from '@elementor/ui/Stack';
import Container from '@elementor/ui/Container';
import * as React from 'react';
import DropdownMenu from '../../../assets/components/DropdownMenu';
import { CAMPAIGNS, CAMPAIGNS_TOP_CTA_TEXT } from '../../../constants/textsJson';
import { navCampaignItems } from '../../../constants/menus';
import { useNavigate } from 'react-router-dom';
import Typography from '@elementor/ui/Typography';
import Button from '@elementor/ui/Button';
import RightArrowIcon from '../../../assets/icons/right-arrow-icon';

const buttonWidth:number = 200;

const Campaigns: React.FC<any> = () => {
	const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>( null );
	const navigation = useNavigate();
	const itemClickHandler = ( item: string ) => {
		switch ( item ) {
		case 'template':
			navigation( '/new-campaign' );
			break;
		case 'scratch':
			console.log( 'scratch clicked' );
			break;
		}
	};
	return ( <Container component='div' maxWidth={false} disableGutters>
		<Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
			<Typography variant={'h4'}>{CAMPAIGNS}</Typography>
			<Button variant='contained'
				onClick={( e: React.MouseEvent<HTMLElement> ) => setAnchorEl( e.currentTarget )}
				endIcon={<RightArrowIcon />}
				sx={{ width: buttonWidth }}>{CAMPAIGNS_TOP_CTA_TEXT}</Button>

		</Stack>
		<DropdownMenu setAnchorEl={setAnchorEl} anchorEl={anchorEl} menuItems={navCampaignItems( itemClickHandler )} buttonWidth={buttonWidth}/>
	</Container> );
};

export default Campaigns;
