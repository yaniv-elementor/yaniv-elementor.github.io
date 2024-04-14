import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const routerLink = React.forwardRef( ( props: any, ref: any ) => {
	const { href,state, ...rest } = props;

	return <RouterLink ref={ref} to={href} state={state} {...rest} />;
}
);

export default routerLink;
