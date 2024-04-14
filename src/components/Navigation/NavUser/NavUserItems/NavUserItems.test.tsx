import * as React from 'react';
import { shallow } from 'enzyme';
import NavUserItems from './NavUserItems';

describe( 'NavUserItems', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NavUserItems /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
