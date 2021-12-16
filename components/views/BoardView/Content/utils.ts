declare global {
	type DndColumnsState = { id: string; value: string; content: { id: string; value: string }[] }[];
}

export enum TaskStatuses {
	Todo = 'todo',
	InProgress = 'inProgress',
	InReview = 'inReview',
	Done = 'done',
}

export const generateId = (postfix: string) => {
	return `${Math.random()}-${postfix}`;
};

export const initialContent: DndColumnsState = [
	{
		id: TaskStatuses.Todo,
		value: 'Todo',
		content: [
			{
				id: generateId('task'),
				value: 'Implement "Calendar" page',
			},
			{
				id: generateId('task'),
				value: 'Implement "Tasks" page',
			},
			{
				id: generateId('task'),
				value: 'Implement "Account" page',
			},
		],
	},
	{
		id: TaskStatuses.InProgress,
		value: 'In progress',
		content: [
			{
				id: generateId('task'),
				value: 'Implement "Board" page',
			},
		],
	},
	{
		id: TaskStatuses.InReview,
		value: 'In review',
		content: [],
	},
	{
		id: TaskStatuses.Done,
		value: 'Done',
		content: [],
	},
];
