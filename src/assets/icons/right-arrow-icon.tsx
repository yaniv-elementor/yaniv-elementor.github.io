import SvgIcon, { SvgIconProps } from '@elementor/ui/SvgIcon';

interface ArrowIconProps extends SvgIconProps {
  dir?: 'up' | 'down' | 'left';
}

const degreesMap = {
	up: 270,
	down: 90,
	left: 180,
	right: 0,
};

const RightArrowIcon: React.FC<ArrowIconProps> = ( { dir = 'right' }, props: SvgIconProps ) => {
	const deg = degreesMap[ dir ];
	return (
		<SvgIcon viewBox="0 0 20 20" sx={ { transform: `rotate(${ deg }deg)` } } {...props}>
			<path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M8.09907 13.7759C7.855 13.5318 7.855 13.1361 8.09907 12.892L10.9905 10.0007L8.09907 7.10926C7.855 6.86518 7.855 6.46945 8.09907 6.22538C8.34315 5.9813 8.73888 5.9813 8.98296 6.22538L12.3163 9.55871C12.5604 9.80279 12.5604 10.1985 12.3163 10.4426L8.98296 13.7759C8.73888 14.02 8.34315 14.02 8.09907 13.7759Z" fillOpacity="0.54" />
		</SvgIcon>
	);
};


export default RightArrowIcon;
