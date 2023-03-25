import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getSprints } from '../../redux/getSprints/get.actions';
import AddSprint from '../AddSprint'

const Sprint = () => {
  const {sprints}=useSelector(store=>store.Sprints)
      console.log(sprints)
  const dispatch=useDispatch();
  useEffect(()=>{
       dispatch(getSprints());
  },[])
  return (
    <div>
     <AddSprint></AddSprint>
     {sprints.map(item=>(<Link to={`/${item._id}/task`}>{item.name}</Link>))}
    </div>
  )
}

export default Sprint
