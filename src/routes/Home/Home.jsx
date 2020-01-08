import React from 'react'
import classes from './Home.module.scss'
import {NavLink} from 'react-router-dom'
import Counter from './../../modules/Counter/Counter.jsx'

export default () => {
	return (
		<div className={classes.Home}>
			<div>
				<h1>ABC-Tasks</h1>
					<NavLink to='/abc'>Общая ABC</NavLink>
					<NavLink to='/category'>Категории</NavLink>
					<NavLink to='/create'>Создать задачу</NavLink>
				<Counter/>
			</div>
		</div>	
	)
}