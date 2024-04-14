import * as React from 'react';
import { shallow } from 'enzyme';
import NavListItem from './NavListItem';

describe( 'NavListItem', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NavListItem /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
