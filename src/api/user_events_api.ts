import { ClickUserEvent } from '../common/data-events/classes/click-user-events.class';
import { IClickUserEvent } from '../common/data-events/interfaces/user-events.interfaces';
// import { apiRoutes } from '../constants/textsJson';
// import { axios_api } from './axios_api';// TODO: remove if won't be needed in the future
import { mixpanelTrack } from '../mixpanel.config';
import { useMutation } from 'react-query';

export const useFireUserEvent = () => {
	return useMutation({
		mutationFn: (data: IClickUserEvent) => {
			const eventName = data.event_name;
			const currentEvent = new ClickUserEvent(eventName);
			console.log(currentEvent); //TODO: remove if won't be needed in the future
			mixpanelTrack(eventName, currentEvent);

			// await axios_api.post(apiRoutes.userEvent, { event: data.event_name })
		},
		onSuccess: () => { }
	});
};
