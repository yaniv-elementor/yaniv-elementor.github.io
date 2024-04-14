import * as React from 'react';
import { shallow } from 'enzyme';
import NavList from './NavList';

describe( 'NavList', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NavList /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
