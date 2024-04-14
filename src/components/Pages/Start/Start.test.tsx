import * as React from 'react';
import { shallow } from 'enzyme';
import Start from './Start';

describe( 'Start', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Start /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
