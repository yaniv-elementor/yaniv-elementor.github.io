import * as React from 'react';
import { shallow } from 'enzyme';
import Chats from './Chats';

describe( 'Chats', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <Chats /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
