import { ClickUserEventsEnum } from '../enums/user-events.enum';

export interface ILinkData {
	path: string;
	eventName: ClickUserEventsEnum;
	tab?: string;
}

export interface INavItem {
	displayText: string;
	icon: JSX.Element;
	linkPath: ILinkData;
	subItems?: { displayText: string; linkPath: ILinkData }[];
};
