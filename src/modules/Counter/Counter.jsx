import React from 'react'
import {TasksContext} from './../../context/TasksContext.js'

export default () => {

	const count = React.useContext(TasksContext)
	
	return (
		<>
			<div>Всего задач: {count.length}</div>
			<div>Количество просроченных задач: 10</div>
		</>
	)
}