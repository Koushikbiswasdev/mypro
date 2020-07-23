import React from 'react';

const Headers=(props)=>{

	return(
		<div>
	 <h1>Headers props {props.name} age {props.age}</h1>
	 {props.children}
		</div>

		)
}

export default Headers;