import * as React from 'react';
import { shallow } from 'enzyme';
import Forms from './Forms';

describe( 'Forms', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Forms /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
