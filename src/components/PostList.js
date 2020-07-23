import React from 'react';
import axios from 'axios';
class PostList extends React.Component{

	constructor(props){
		super(props);
	this.state={
		posts:[]
	}
	}

	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(res=>{
			console.log(res);
			this.setState({
				posts:res.data
			})
			
		}).catch(error=>{})
	}

	render(){
			// console.log('render',this.state.post);

		const test=this.state.posts.map(pst=>{
			return <tr key={pst.id}>
					
					<td>
					{pst.title}
					</td>
			</tr>
		
		})
		console.log('test',test);
		return <React.Fragment>
		PostList Component
		<table>
			<tbody>
		{test}
			</tbody>
			</table>
		</React.Fragment>
	}
}

export default PostList;