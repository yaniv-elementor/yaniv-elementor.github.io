import SvgIcon, { SvgIconProps } from '@elementor/ui/SvgIcon';

const ExpandIcon = ( props: SvgIconProps ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" {...props} >
			<path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M20 3.25H16C15.5858 3.25 15.25 3.58579 15.25 4C15.25 4.41421 15.5858 4.75 16 4.75H18.1893L13.4697 9.46967C13.1768 9.76256 13.1768 10.2374 13.4697 10.5303C13.7626 10.8232 14.2374 10.8232 14.5303 10.5303L19.25 5.81066V8C19.25 8.41421 19.5858 8.75 20 8.75C20.4142 8.75 20.75 8.41421 20.75 8V4C20.75 3.58579 20.4142 3.25 20 3.25ZM10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L4.75 18.1893V16C4.75 15.5858 4.41421 15.25 4 15.25C3.58579 15.25 3.25 15.5858 3.25 16V20C3.25 20.4142 3.58579 20.75 4 20.75H8C8.41421 20.75 8.75 20.4142 8.75 20C8.75 19.5858 8.41421 19.25 8 19.25H5.81066L10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697Z"/>
		</SvgIcon>
	);
};


export default ExpandIcon;
