import React from 'react';

class Functionclick extends React.Component{

	constructor(){
super();
		this.changeevent=this.changeevent.bind(this);
		this.state={msg:'MCA'}
	}
changeevent=()=>{
	
	if(this.state.msg=='MCA'){
	this.setState({msg:'BCA'})

}else{
this.setState({msg:'MCA'})
}
	// console.log('changeevent',this);

}
	render(){
		const numbers=[3,5,6,7,8,9,10];
		// const newnum=numbers.map((numbers)=>{
		// 	return <li>{numbers}</li>
		// })
		return (
			<React.Fragment>
				function Click
				<button onClick={this.changeevent}>Change Event</button>
				{this.state.msg}
				
				{
					numbers.map(numbers=> <li>{numbers}</li>)
				}
			</React.Fragment>
			)
	}
}

export default Functionclick;