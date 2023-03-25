import { PostTask_Error, PostTask_loading, PostTask_Success } from "./postTypestypes"


export const PostTask=(data)=>(dispatch)=>{

      dispatch({type:PostTask_loading})
        fetch("http://localhost:8005/sprint",{
       method:"POST",
       headers:{
           "Content-Type": "application/json"
       },
       body:JSON.stringify(data)}
   ).then(res=>res.json()).then(()=>{
    dispatch({type:PostTask_Success})
   
}).catch(()=>{
    dispatch({type:PostTask_Error})
})
   
    
}