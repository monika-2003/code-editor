import React from 'react';
import Avatar from 'react-avatar';
import './client.css';

function Client({username}) {

    // functions defined

    const getRandomColor = () => {
        let colors = ['darkcyan', 'coral', 'dodgerblue', 'green', 'darkmagenta', 'deeppink', 'orange', 'grey', 'brown', 'deepskyblue']
        let number = Math.ceil(Math.random() * (10-0) + 0)
        return colors[number];
    }

    

    return (
    <div className='client-section'>
        <div className='avatar'>
            <Avatar color={getRandomColor()} name={username}  size={45} round='10px'/>
        </div>
    </div>
  )
}

export default Client