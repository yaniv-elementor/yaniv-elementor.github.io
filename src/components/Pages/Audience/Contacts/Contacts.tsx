import Box from '@elementor/ui/Box';
import Container from '@elementor/ui/Container';
import * as React from 'react';
import DropdownMenu from '../../../../assets/components/DropdownMenu';
import { CONTACTS, CONTACTS_TOP_CTA_TEXT } from '../../../../constants/textsJson';
import { navContactItems } from '../../../../constants/menus';
import Drawer from '@elementor/ui/Drawer';
import Dialog from '@elementor/ui/Dialog';
import { useNavigate } from 'react-router-dom';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import Button from '@elementor/ui/Button';
import RightArrowIcon from '../../../../assets/icons/right-arrow-icon';

const buttonWidth:number = 200;

const Contacts: React.FC<any> = () => {
	const navigation = useNavigate();
	const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>( null );
	const [ isOpen, setIsOpen ] = React.useState( {
		'new_contact': false,
		'import_contacts': false
	} );
	const onMenuItemClickHandler = ( item: string, open: boolean ) => {
		if ( item === 'form' ) {
			navigation( '/forms' );
			return;
		}

		if ( item === 'chat' ) {
			navigation( '/chats' );
			return;
		}

		setIsOpen( { ...isOpen, [item]: open } );
	};
	return ( <Container component='div' maxWidth={false} disableGutters>
		<Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
			<Typography variant={'h4'}>{CONTACTS}</Typography>
			<Button variant='contained'
				onClick={( e: React.MouseEvent<HTMLElement> ) => setAnchorEl( e.currentTarget )}
				endIcon={<RightArrowIcon />}
				sx={{ width: buttonWidth }}>{CONTACTS_TOP_CTA_TEXT}</Button>
		</Stack>
		<DropdownMenu setAnchorEl={setAnchorEl} anchorEl={anchorEl} menuItems={navContactItems( onMenuItemClickHandler )} buttonWidth={buttonWidth}/>
		<Drawer open={isOpen['new_contact']} onClose={() => setIsOpen( { ...isOpen, 'new_contact': false } )} anchor='right' >
			<Box sx={{ width: '400px', px: '100px' }}>new contact form</Box>
		</Drawer>
		<Dialog
			open={isOpen['import_contacts']}
			onClose={() => setIsOpen( { ...isOpen, 'import_contacts': false } )}>
			<Box sx={{ width: '500px', height: '350px', px: '100px' }}>import contacts</Box>
		</Dialog>
	</Container> );
};

export default Contacts;
