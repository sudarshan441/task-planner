import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postSprint } from '../redux/postStrints/post.actions';

const AddSprint = () => {
    const [text,setText]=useState("")
    const dispatch=useDispatch();
    const handleSprintChange=(event)=>{
    setText(event.target.value);
    }
    function handleAddSprint() {
        dispatch(postSprint({name:text}))
         setText('');
      }
  return (
    <div>
    <input type="text" value={text} onChange={handleSprintChange} />
    <button onClick={handleAddSprint}>Add Sprint</button>
    </div>
  )
}

export default AddSprint
