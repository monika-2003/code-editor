import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';



function Home() {

  // useState hooks

  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();


  // functions
  const createNewId = () => {

    const ID = uuidv4();
    setId(ID);

    toast.success('Created a new room');
  }


  const join = (e) => {
    e.preventDefault();

    if(id && username) {
      navigate(`/editor/${id}`)
    }

    if(!id || !username) {
      toast.error('Both the fields are required');
    }

  }

  return (
    <div className='home-page'>
        <div className='form-container'>
            <h1 className='heading'>Real Time Code Editor</h1>
            <p className='sub-heading'>Paste invitation Room Id</p>
            <input type='text' placeholder='Room Id' className='form-input' value = {id} onChange={(e)=> setId(e.target.value)} />
            <input type='text' placeholder='Username' className='form-input' value={username} onChange={(e)=> setUsername(e.target.value)} />

            <button className='join-btn' onClick={join}>Join</button>

            <span className='newroom-link'>You can also create a <Link onClick={createNewId} >new room</Link></span>
        </div>
    </div>
  )
}

export default Home