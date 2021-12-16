import { AccountIcon, BoardIcon, CalendarIcon, NotesIcon, TasksIcon } from '~icons';

export const navigation = [
	{
		label: 'Board',
		pathname: 'board',
		Icon: BoardIcon,
		disabled: false,
	},
	{
		label: 'Calendar',
		pathname: 'calendar',
		Icon: CalendarIcon,
		disabled: true,
	},
	{
		label: 'Tasks',
		pathname: 'tasks',
		Icon: TasksIcon,
		disabled: true,
	},
	{
		label: 'Notes',
		pathname: 'notes',
		Icon: NotesIcon,
		disabled: true,
	},
	{
		label: 'Account',
		pathname: 'account',
		Icon: AccountIcon,
		disabled: true,
	},
];
