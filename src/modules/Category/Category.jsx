import React from 'react'
import Select from './../../components/Select'
import {TasksContext} from './../../context/TasksContext.js'

export default React.memo(() => {

	const {state, dispatch} = React.useContext(TasksContext)
	const tasks = state.tasks

	const category = ['Все']

	tasks.map((task, index) => {
 		return category.push(task.category)
	})
	
	const uniqCategory = []

	for (let i = 0; i < category.length; i++ ) {
		let item = category[i]
		if (!uniqCategory.includes(item)) {
			uniqCategory.push(item)
		}
	}
	
	const changeCategory = (e) => {
		// dispatch: ({
		// 	type: 'CHANGE_CATEGORY',
		// 	payload: {
		// 		category: e.target.value
		// 	}
		// })
	}
	return (
		<div>
			<span>Фильтровать по категориям: </span>
			<Select onChange={changeCategory} name="" id="">
				{uniqCategory.map((unique, index) => {
					return <option key={index} value={unique}>{unique}</option>
				})}
			</Select>
		</div>
	)
})