import List from '@elementor/ui/List';
import Menu from '@elementor/ui/Menu';
import usePopupState, { bindMenu, bindTrigger } from '@elementor/ui/usePopupState';
import { ThemeProvider } from '@elementor/ui';
import NavUserItems from './NavUserItems/NavUserItems';
import UserIcon from '../../../assets/icons/user-icon';
import NavListItem from '../NavList/NavListItem/NavListItem';
import { ACCOUNT } from '../../../constants/textsJson';

type NavUserProps = {
	isOpen: boolean;
	setOpen?: ( isOpen: string ) => void;
};


const NavUser: React.FC<NavUserProps> = ( { isOpen } ) => {
	const popupState = usePopupState( { variant: 'popover', popupId: 'userMenu' } );
	return (
		<>
			<List sx={{ p: 2, width: '100%', position: 'relative' }}>
				<NavListItem
					displayText={ACCOUNT}
					customProps={bindTrigger( popupState )}
					onClickHandler={() => { }}
					isOpen={isOpen}
					icon={<UserIcon />}
					isSubMenuOpen={false}
					hasSubItems={[]} />
			</List>
			<ThemeProvider colorScheme="dark">
				<Menu {...bindMenu( popupState )}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 250,
						horizontal: 'center',
					}}>
					<NavUserItems />
				</Menu>
			</ThemeProvider>
		</>
	);
};

export default NavUser;
