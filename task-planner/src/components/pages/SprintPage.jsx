import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostTask } from '../../redux/postTask/postTask.actions';
 export const getTask=(id)=>{
    return fetch(`http://localhost:8005/sprint/${id}/tasks`)
}
const getUser = () => {
  return fetch('http://localhost:8005/user');
};

const initialState = {
  title: '',
  type: '',
  status: 'to do',
  assignee: '',
};
const SprintPage = () => {
  let { sprintId } = useParams();

  const [user, setUser] = useState([]);
  const [task, setTask] = useState({});
  const [tasks,setTasks] = useState([]);

  const dispatch = useDispatch();
  const { sprints } = useSelector((store) => store.Sprints);

  const handleTaskChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };
  function handleAddTask() {
    console.log({ ...task, sprintId }, 'from here');
    dispatch(PostTask({ ...task, sprintId }));
    getTask(sprintId).then((res) => res.json()).then(res => {
        setTasks(res);

      } );
    // setTask(initialState);
  }

  useEffect(() => {
    getUser()
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
      getTask(sprintId).then((res) => res.json()).then(res => {
        setTasks(res);

      } );
  }, []);
  const { title, type, assignee } = task;
  return (
    <div>
      <input
        type="text"
        value={title}
        name="title"
        onChange={handleTaskChange}
      />
      <select name="type" onChange={handleTaskChange}>
        <option value={'type'}>type</option>
        <option value={'bug'}>bug</option>
        <option value={'feature'}>feature</option>
        <option value={'story'}>story</option>
      </select>
      <select value={assignee} name="assignee" onChange={handleTaskChange}>
        <option>assign a user</option>
        {user.map((item) => (
          <option value={item._id}>{item.name}</option>
        ))}
      </select>
      <button onClick={handleAddTask}>Add task</button>
      {tasks.map(item=>(<li>{item.title +"-" +item.type +"-"+ item.status  } <select>
        <option value={'to do'}>to do</option>
        <option value={'in progress'}>in progress</option>
        <option value={'done'}>done</option>
        </select> <button>update</button></li>)
        )}
    </div>
  );
};

export default SprintPage;