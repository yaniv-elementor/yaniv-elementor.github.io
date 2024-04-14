import * as React from 'react';
import { shallow } from 'enzyme';
import Campaigns from './Campaigns';

describe( 'Campaigns', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Campaigns /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
