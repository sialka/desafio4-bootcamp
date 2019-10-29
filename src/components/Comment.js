import React, { Component } from 'react';

import './Comment.css';

function Comment({ data }){    

  return (           
    <article id="comment">            
        <ul>
          <li id={data.id}>           
            <img src={data.author.avatar} alt="profile"/>
            <p><span>{data.author.name}</span>{data.content}</p>
          </li>
        </ul>
    </article>   
  )
}

export default Comment;