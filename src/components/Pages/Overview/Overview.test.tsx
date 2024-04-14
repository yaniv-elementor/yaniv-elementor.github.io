import * as React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview';

describe( 'Overview', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Overview /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
