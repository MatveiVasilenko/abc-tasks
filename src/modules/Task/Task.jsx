import React from 'react'
import classes from './Task.module.scss'
import {TasksContext} from './../../context/TasksContext.js'
import Button from './../../components/Button'


export default React.memo(({id, idKey, text, category = 'Home', level = 'D'}) => {
	const cls = [
		classes.Task
	]

	if (level !== 'A' && level !== 'B' && level !== 'C' && level !== 'D') {
		level = 'D'
	}
	if (level === 'A') {
		cls.push(classes.levelA)
	} else if (level === 'B') {
		cls.push(classes.levelB)
	} else if (level === 'C') {
		cls.push(classes.levelC)
	} else {
		cls.push(classes.levelD)
	}
	
	const {dispatch} = React.useContext(TasksContext)

	const [opacity, setOpacity] = React.useState(0)

	const changeLevelTask = (e) => {
		setOpacity(0)
		dispatch({
			type: 'CHANGE_LEVEL',
			payload: {
				id: idKey,
				newLevel: e.target.value
			}
		})
	}

	return (
			<div>
				<div className={cls.join(' ')}>
					<div>{id}</div>
					<div>{text}</div>
					<div>{category}</div>
					<div>{level}</div>
					<div style={{opacity, display: 'flex'}}>
						<Button value={'A'} onClick={changeLevelTask}>A</Button>
						<Button value={'B'} onClick={changeLevelTask}>B</Button>
						<Button value={'C'} onClick={changeLevelTask}>C</Button>
						<Button value={'D'} onClick={changeLevelTask}>D</Button>						
					</div>
					<div>
						<Button onClick={() => {
							opacity === 0 ? setOpacity(1) : setOpacity(0)							
						}}>Change level</Button>
						<Button onClick={() => {
							dispatch({
								type: 'TASK_READY',
								payload: {
									id
								}
							})
						}}>Ready</Button>
					</div>
				</div>
			</div>
		)
})