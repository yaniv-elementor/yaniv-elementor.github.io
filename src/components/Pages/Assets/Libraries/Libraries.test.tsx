import * as React from 'react';
import { shallow } from 'enzyme';
import Libraries from './Libraries';

describe( 'Templates', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Libraries /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
