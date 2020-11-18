import React from 'react';
import Header from "./header";
import Sidebar from './sidebar';
import Feed from "./feed";
import "./App.css";
import Widgets from "./widget";
import Login from "./Login";
import {useStateValue} from "./stateProvider";


function App (){
	const [{user},dispatch]=useStateValue();
	return(
		<div className="app">
			{!user? (
			<Login/>
			):(
				<div>
			<Header/>
			<div className="app__body">
			<Sidebar/>
			<Feed/>
			<Widgets/>
            </div>
			</div>
			)}
		</div>
	);
}

	export default App;

