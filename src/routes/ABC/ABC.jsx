import React from 'react'
// import classes from './ABC.module.scss'
import {TasksContext} from './../../context/TasksContext.js'
import {NavLink} from 'react-router-dom'
import Task from './../../modules/Task/Task.jsx'
import Category from './../../modules/Category/Category.jsx'


export default React.memo(() => {

	const {state} = React.useContext(TasksContext)
	const tasks = state.tasks
	tasks.sort((a, b) => {		
		if (a.level > b.level) {
			return 1
		}
		if (a.level < b.level) {
			return -1
		}
		return 0
	})
	return (
		<div>
			<NavLink to='/'>Вернуться на главную</NavLink>
			<Category />
			{tasks.map((task, index) => {
				return <Task 
					key={index}
					idKey={task.id}
					id={index + 1}
					text={task.text}
					category={task.category}
					level={task.level}
				/>
			})}
			<NavLink to='/create'>Создать задачу</NavLink>
		</div>
	)
})