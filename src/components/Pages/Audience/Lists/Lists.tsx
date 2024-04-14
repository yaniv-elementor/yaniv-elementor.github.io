import Box from '@elementor/ui/Box';
import * as React from 'react';
import { LISTS, LISTS_TOP_CTA_TEXT } from '../../../../constants/textsJson';
import Drawer from '@elementor/ui/Drawer';
import Stack from '@elementor/ui/Stack';
import Typography from '@elementor/ui/Typography';
import Button from '@elementor/ui/Button';
import RightArrowIcon from '../../../../assets/icons/right-arrow-icon';


const Lists: React.FC<any> = () => {
	const [ isOpen, setIsOpen ] = React.useState( false );

	return <Stack sx={{ width: '100%' }} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
		<Typography variant={'h4'}>{LISTS}</Typography>
		<Button variant='contained' onClick={() => setIsOpen( true )} endIcon={<RightArrowIcon/>}>{LISTS_TOP_CTA_TEXT}</Button>
		<Drawer open={isOpen} onClose={() => setIsOpen( false )} anchor='right' >
			<Box sx={{ width: '400px', px: '100px' }}>New List</Box>
		</Drawer>
	</Stack>;
};

export default Lists;
