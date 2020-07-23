import React from 'react';

class Channel extends React.Component{

	constructor(){

		super();
		this.state={
			message:'Sony live',msg:'Sony Max'
		}
	}

msgChange(){
	console.log("msgOnChange");
	this.setState({
		msg:'Sony Ten Sports'
	})
}
	render(){
		return (
			<div>
			{this.state.msg}
			<br/>
			{this.state.message}
			<br/>
			<button onClick={()=>{this.msgChange()}}>Click me</button>
			</div>
			)
	}
}

export default Channel;