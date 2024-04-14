import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import * as React from 'react';

const Start: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant='h4'>Start</Typography>
	</Stack>;
};

export default Start;
