import { ClickUserEventsEnum } from '../enums/user-events.enum';
import { BaseUserEvent } from './abstruct/base-user-event.class';

export class ClickUserEvent extends BaseUserEvent {
	constructor( eventName: ClickUserEventsEnum ) {
		super( eventName );
	}
};
