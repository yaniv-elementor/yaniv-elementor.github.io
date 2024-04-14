import SvgIcon, { SvgIconProps } from '@elementor/ui/SvgIcon';

const SideMenuIcon = ( props: SvgIconProps ) => {
	return (
		<SvgIcon viewBox="0 0 20 20" {...props} >
			<path xmlns="http://www.w3.org/2000/svg" d="M6 1V17M3 1H15C16.1046 1 17 1.89543 17 3V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z"/>
		</SvgIcon>
	);
};


export default SideMenuIcon;
