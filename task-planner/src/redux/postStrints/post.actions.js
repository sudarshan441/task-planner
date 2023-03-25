import { POST_Error, POST_loading, POST_Success } from "./post.types";

export const postSprint=(data)=>async(dispatch)=>{
    try{
      dispatch({type:POST_loading})
        let res=await fetch(`http://localhost:8005/sprint/${data.sprintId}/tasks`,{
       method:"POST",
       headers:{
           "Content-Type": "application/json"
       },
       body:JSON.stringify(data)}
   )
    res =await res.json();
    dispatch({type:POST_Success});
    alert("sprint successfully created")
     }catch(err){
     dispatch({type:POST_Error})
     alert("Error: " + err)
    }
    
}