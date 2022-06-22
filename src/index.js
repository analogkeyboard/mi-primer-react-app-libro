import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.js'
class App extends React.Component{
	render(){
		return <div> <Home/> </div>
	}
}
/* 
ReactDOM.render(
	<App/>,
	document.querySelector('#root')
	) */

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);