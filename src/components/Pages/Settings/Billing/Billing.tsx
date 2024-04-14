import * as React from 'react';
import { BILLING } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';


const Billing: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{BILLING}</Typography>
	</Stack>;
};

export default Billing;
