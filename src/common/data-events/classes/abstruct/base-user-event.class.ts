import { ClickUserEventsEnum } from '../../enums/user-events.enum';

export abstract class BaseUserEvent {
	public readonly id: string;
	public readonly timeMs: number;
	public readonly contextUrl: string;
	public readonly windowLocation: Location;
	public readonly eventName: ClickUserEventsEnum;
	public readonly device: string;
	public readonly ip: string;
	public readonly userType: string;
	public readonly host: string;
	public readonly origin: string;
	public readonly pathname: string;

	constructor( eventName: ClickUserEventsEnum ) {
		this.id = 'id_234'; // Mock value
		this.timeMs = Date.now(); // Current timestamp
		this.contextUrl = window.location.href;
		this.host = window.location.host;
		this.origin = window.location.origin;
		this.pathname = window.location.pathname;
		this.windowLocation = window.location;
		this.eventName = eventName;
		this.device = window.navigator.userAgent;
		this.ip = '127.0.0.1'; // Mock value
		this.userType = 'core'; // Mock value
	}
}
