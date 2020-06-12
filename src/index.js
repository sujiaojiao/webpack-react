
// var root = document.getElementById('root');
// // import './index.scss';
// root.innerHTML = ('<div >Helloworld</div>');
// console.log('nihoa fefwefsssssssfseef');
import "@babel/polyfill";

import React, { Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component {
	render() {
		return <div>你好</div>
	}
}
ReactDom.render(<App />,document.getElementById('root'));
// const arr = [
// 	new Promise(()=>{}),
// 	new Promise(()=>{})
// ];
// arr.map(item=>{
// 	console.log(item);
// });