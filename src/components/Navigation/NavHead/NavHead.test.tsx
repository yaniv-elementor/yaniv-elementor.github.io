import * as React from 'react';
import { shallow } from 'enzyme';
import NavHead from './NavHead';

describe( 'NavHead', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NavHead /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
