import * as React from 'react';
import { FORM_INTEGRATIONS } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';



const Integration: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{FORM_INTEGRATIONS}</Typography>
	</Stack>;
};

export default Integration;
