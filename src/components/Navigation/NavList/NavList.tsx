import * as React from 'react';
import NavListItem from './NavListItem/NavListItem';
import List from '@elementor/ui/List';
import Collapse from '@elementor/ui/Collapse';
import RightArrowIcon from '../../../assets/icons/right-arrow-icon';
import NavListSubItem from './NavListSubItem/NavListSubItem';
import { navItems } from '../../../constants/menus';
import { ILinkData } from '../../../common/data-events/interfaces/nav-items.interface';

type NavListProps = {
	isOpen: boolean;
};

const NavList: React.FC<NavListProps> = ( { isOpen } ) => {

	const [ isSubMenuOpen, setIsSubMenuOpen ] = React.useState( '' );

	const handleSubMenuClick = ( currentTitle: string ) => {
		setIsSubMenuOpen( prevValue => prevValue === currentTitle ? '' : currentTitle );
	};

	return ( <List sx={{ p: 2, width: '100%', height: '100%', position: 'relative' }}>
		{navItems.map( ( { displayText, icon, linkPath, subItems = [] } ) => (
			<React.Fragment key={displayText}>
				<NavListItem
					displayText={displayText}
					onClickHandler={() => subItems && handleSubMenuClick( displayText )}
					isOpen={isOpen}
					isSubMenuOpen={isSubMenuOpen === displayText}
					icon={icon}
					linkPath={linkPath}
					hasSubItems={subItems.map( item => `/${ item.displayText.toLowerCase() }` )}
				>
					{!!subItems.length && <RightArrowIcon dir={isSubMenuOpen === displayText ? 'up' : 'down'} />}
				</NavListItem>
				{!!subItems.length && (
					<Collapse in={isOpen && isSubMenuOpen === displayText} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{/* eslint-disable-next-line @typescript-eslint/no-shadow */}
							{subItems.map( ( { displayText, linkPath }: { displayText: string, linkPath: ILinkData } ) => (
								<NavListSubItem key={displayText} isOpen={true} displayText={displayText} linkPath={linkPath} />
							) )}
						</List>
					</Collapse>
				)}
			</React.Fragment>
		) )}
	</List>
	);
};

export default NavList;
