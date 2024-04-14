import Avatar from '@elementor/ui/Avatar';
import MenuItem from '@elementor/ui/MenuItem';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import * as React from 'react';

const AvatarMenuItem: React.FC<any> = () => {
	return <MenuItem sx={{ m: theme => theme.spacing( .5, .5, 1, .5 ), px: 0 }}>
		<Stack justifyContent={'center'} flexWrap={'wrap'} sx={{ height: '40px' }}>
			<Avatar sx={{ mr: 1.5, flex: '0 0 100%' }} >JB</Avatar>
			<Typography variant="subtitle2" sx={{ flex: '0 0 50%' }}>Jack Bauer</Typography>
			<Typography variant="caption" sx={{ flex: '0 0 50%' }}>jack@bauer.com</Typography>
		</Stack>
	</MenuItem>;
};

export default AvatarMenuItem;
