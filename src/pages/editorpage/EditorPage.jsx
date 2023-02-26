import React, { useState } from 'react';
import './editorpage.css';
import Client from '../../components/client/Client';
import Editor from '../../components/editor/Editor';



function EditorPage() {

  // useState hooks

  const [clients, setClients] = useState([
    { socketId: 1, username: 'Monika Yadav' },
    { socketId: 2, username: 'Gudiya D' },
    { socketId: 3, username: 'Kavya Mishra' },
    { socketId: 4, username: 'Shraddha Srivastava' },
  ]);


  return (
    <div className='editor-page'>
      <div className='left-wrap'>
        <h3 className='connected-heading'>Connected</h3>

        <div className='left-inner'>
          <div className='client-list'>
            {
              clients.map((client)=> {
                return(
                  <Client key={client.socketId} username = {client.username} />
                )
              }
              )
            }
          </div>
        </div>

      <div className='editor-btns'>
        <button className='editor-btn leave-btn'>Leave meeting</button>
      </div>

      </div>
      <div className='right-wrap'>
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage