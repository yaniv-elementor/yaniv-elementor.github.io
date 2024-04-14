import * as React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

describe( 'Topbar', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Topbar /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
