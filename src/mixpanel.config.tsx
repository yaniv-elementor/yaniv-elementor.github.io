
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '8e3718a880183569bfc3546d6c1f65a5'; //TODO: replace with the actual key once have company account

mixpanel.init( MIXPANEL_TOKEN, { debug: true } );

export const mixpanelTrack = ( event: string, properties?: Record<string, any> ) => {
	mixpanel.track( event, properties );
};

export default mixpanel;
