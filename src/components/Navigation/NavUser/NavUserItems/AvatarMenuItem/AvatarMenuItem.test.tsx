import * as React from 'react';
import { shallow } from 'enzyme';
import AvatarMenuItem from './AvatarMenuItem';

describe( 'AvatarMenuItem', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <AvatarMenuItem /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
