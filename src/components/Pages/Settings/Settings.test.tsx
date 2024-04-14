import * as React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

describe( 'Settings', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Settings /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
