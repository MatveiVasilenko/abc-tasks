import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import ABC from './routes/ABC/ABC.jsx'
import {TasksContext} from './context/TasksContext.js'
import {taskReducer, initialState} from './context/tasks.js'


function App() {

	const [state, dispatch] = React.useReducer(taskReducer, initialState);

	  return (
	    <TasksContext.Provider value={{state, dispatch}}>
	    	<Switch>
	    	  <Route path='/' exact component={Home}/>
	    	  <Route path='/abc' component={ABC}/>
	    	</Switch>
	    </TasksContext.Provider>
	  );
}

export default App;
