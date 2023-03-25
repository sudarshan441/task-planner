import { GET_Error, GET_loading, GET_Success } from "./get.types";

export const getSprints=()=>async(dispatch)=>{
    try{
      dispatch({type:GET_loading})
        let res=await fetch("http://localhost:8005/sprint"
      )
    res =await res.json();
    dispatch({type:GET_Success,payload:res});
    }catch(err){
     dispatch({type:GET_Error})
     alert("Error: " + err)
    }
}