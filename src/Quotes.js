import {useState} from "react"
import axios from "axios"
function Quotes()
{
const[ans,setAns]=useState();
const[author,setAuthor]=useState();

const find=(event)=>{
	event.preventDefault();
	let urladd="http://api.quotable.io/random"
	axios.get(urladd)
	.then(res=>{
		let quote=res.data.content
		let author=res.data.author
		setAns(quote)
		setAuthor(author)
	})
	.catch(err=>console.log(err))
}
return(
<>
<center>
<h1> Motivational Quotes App </h1>
<form onSubmit={find}>
<input type="submit" value="Get Quote"/>
</form>
<h1>{ans}</h1>
<h2>{author}</h2>
</center>
</>
)
}
export default Quotes;