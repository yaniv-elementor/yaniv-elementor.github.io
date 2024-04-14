import * as React from 'react';
import { shallow } from 'enzyme';
import NavListSubItem from './NavListSubItem';

describe( 'NavListItem', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NavListSubItem /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
