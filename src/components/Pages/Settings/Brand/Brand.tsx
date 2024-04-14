import * as React from 'react';
import { BRAND } from '../../../../constants/textsJson';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';

const Brand: React.FC<any> = () => {
	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{BRAND}</Typography>
	</Stack>;
};

export default Brand;
