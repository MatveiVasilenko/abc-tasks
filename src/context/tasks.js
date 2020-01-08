export const initialState = {
    tasks: [
		{
			id: 1,
			text: 'Это задача № 1',
			category: 'Home',
			level: 'C',
		},
		{
			id: 2,
			text: 'Это задача № 2',
			category: 'Home',
			level: 'C',
		},
		{
			id: 3,
			text: 'Это задача № 3',
			category: 'Work',
			level: 'A',
		},
		{
			id: 4,
			text: 'Это задача № 4',
			category: 'Work',
			level: 'D',
		},
	]
};

export const taskReducer = (state, action) => {

    switch(action.type) {
        case 'CHANGE_LEVEL':
        	const data = state.tasks
        	console.log(action.payload.id)
			data.map((task, index) => {
				if(task.id === action.payload.id) {
					task.level = action.payload.newLevel
					return task;
				}
				return task
			})
            return {
            	...state
            };

        case 'TASK_READY' :
        	state.tasks.splice(action.payload.id - 1, 1)
				console.log(state.tasks)
        	return {
        		...state
        	};
        default:
            return state
    }
};
 