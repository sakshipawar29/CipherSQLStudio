import {useEffect,useState} from "react"
import api from "../api/api"

export default function AssignmentList(){

 const [assignments,setAssignments] = useState([])

 useEffect(()=>{
  api.get("/assignments")
  .then(res=> setAssignments(res.data))
 },[])

 return(

 <div>

 <h1>SQL Assignments</h1>

 {assignments.map(a=>(
  <div key={a._id}>
   <h3>{a.title}</h3>
   <p>{a.difficulty}</p>
  </div>
 ))}

 </div>

 )
}