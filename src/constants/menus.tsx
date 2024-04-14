import HomeIcon from '../assets/icons/home-icon';
import PointsIcon from '../assets/icons/points-icon';
import TargetIcon from '../assets/icons/target-icon';
import UsersIcon from '../assets/icons/users-icon';
import { ADD_CHAT, ADD_FORM, ADD_NEW_CONTACT, FROM_SCRATCH, FROM_TEMPLATE, IMPORT_FROM_FILE, INTEGRATION, OVERVIEW, SETTINGS } from './textsJson';
import { AUDIENCE, CAMPAIGNS, ASSETS, BRAND, BILLING, FORM_INTEGRATIONS, EMAIL_SMS_SETUP, CONTACTS, LISTS, FORMS, CHATS, LIBRARIES } from './textsJson';
import { ClickUserEventsEnum } from '../common/data-events/enums/user-events.enum';
import { INavItem } from '../common/data-events/interfaces/nav-items.interface';
import PaintBrashIcon from '../assets/icons/paint-brush-icon';
import CardIcon from '../assets/icons/card-icon';
import SWayIcon from '../assets/icons/s-way-icon';
import SettingsIcon from '../assets/icons/settings-icon';

export const navItems: INavItem[] = [
	{ displayText: OVERVIEW, icon: <HomeIcon />, linkPath: { path: `/${ OVERVIEW.toLowerCase() }`, eventName: ClickUserEventsEnum.Overview_Clicked } },
	{
		displayText: AUDIENCE, icon: <UsersIcon />, linkPath: { path: `/${ CONTACTS.toLowerCase() }`, eventName: ClickUserEventsEnum.Contacts_Clicked },
		subItems: [
			{ displayText: CONTACTS, linkPath: { path: `/${ CONTACTS.toLowerCase() }`, eventName: ClickUserEventsEnum.Contacts_Clicked } },
			{ displayText: LISTS, linkPath: { path: `/${ LISTS.toLowerCase() }`, eventName: ClickUserEventsEnum.Lists_Clicked } }
		]
	},
	{ displayText: CAMPAIGNS, icon: <TargetIcon />, linkPath: { path: `/${ CAMPAIGNS.toLowerCase() }`, eventName: ClickUserEventsEnum.Campaigns_Clicked } },
	{
		displayText: ASSETS, icon: <PointsIcon />, linkPath: { path: `/${ FORMS.toLowerCase() }`, eventName: ClickUserEventsEnum.Forms_Clicked },
		subItems: [
			{ displayText: FORMS, linkPath: { path: `/${ FORMS.toLowerCase() }`, eventName: ClickUserEventsEnum.Forms_Clicked } },
			{ displayText: CHATS, linkPath: { path: `/${ CHATS.toLowerCase() }`, eventName: ClickUserEventsEnum.Chats_Clicked } },
			{ displayText: LIBRARIES, linkPath: { path: `/${ LIBRARIES.toLowerCase() }`, eventName: ClickUserEventsEnum.Library_Clicked } }

		]
	}
];

export const navUserItems: INavItem[] = [
	{ displayText: BRAND, icon: <PaintBrashIcon />, linkPath: { path: `/${ SETTINGS.toLowerCase() }`, eventName: ClickUserEventsEnum.Brand_Clicked, tab: BRAND } },
	{ displayText: BILLING, icon: <CardIcon />, linkPath: { path: `/${ SETTINGS.toLowerCase() }`, eventName: ClickUserEventsEnum.Billing_Clicked, tab: BILLING } },
	{ displayText: FORM_INTEGRATIONS, icon: <SWayIcon />, linkPath: { path: `/${ SETTINGS.toLowerCase() }`, eventName: ClickUserEventsEnum.Forms_Integrations_Clicked, tab: INTEGRATION } },
	{ displayText: EMAIL_SMS_SETUP, icon: <SettingsIcon />, linkPath: { path: `/${ SETTINGS.toLowerCase() }`, eventName: ClickUserEventsEnum.Settings_Clicked } }
];

export const navContactItems = ( itemClickHandler: ( type: string, open: boolean ) => void ) => {
	return [
		{ displayName: ADD_FORM, clickHandler: () => itemClickHandler( 'form', true ),
			eventName: ClickUserEventsEnum.Setup_Form_Clicked },
		{ displayName: ADD_CHAT, clickHandler: () => itemClickHandler( 'chat', true ),
			eventName: ClickUserEventsEnum.Setup_Chat_Clicked },
		{ displayName: ADD_NEW_CONTACT, clickHandler: () => itemClickHandler( 'new_contact', true ),
			eventName: ClickUserEventsEnum.Add_New_Contacts_Clicked },
		{ displayName: IMPORT_FROM_FILE, clickHandler: () => itemClickHandler( 'import_contacts', true ),
			eventName: ClickUserEventsEnum.Import_Contacts_From_File_Clicked }
	];
};

export const navCampaignItems = ( itemClickHandler: ( type: string ) => void ) => {
	return [
		{ displayName: FROM_TEMPLATE, clickHandler: () => itemClickHandler( 'template' ), eventName: ClickUserEventsEnum.Create_Campaign_From_Template_Clicked },
		{ displayName: FROM_SCRATCH, clickHandler: () => itemClickHandler( 'scratch' ), eventName: ClickUserEventsEnum.Create_Campaign_From_Scratch_Clicked }
	];
};
