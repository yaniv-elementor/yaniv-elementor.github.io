import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import * as React from 'react';

const Overview: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant='h4'>Overview</Typography>
	</Stack>;
};

export default Overview;
