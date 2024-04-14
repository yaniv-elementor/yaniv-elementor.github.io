import * as React from 'react';
import { shallow } from 'enzyme';
import NewCampaign from './NewCampaign';

describe( 'NewCampaign', () => {
	test( 'matches snapshot', () => {
		const wrapper = shallow( <NewCampaign /> );
		expect( wrapper ).toMatchSnapshot();
	} );
} );
