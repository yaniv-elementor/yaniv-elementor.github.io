import * as React from 'react';
import { LIBRARIES } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';



const Libraries: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{LIBRARIES}</Typography>
	</Stack>;
};

export default Libraries;
