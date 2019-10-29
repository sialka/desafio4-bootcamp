import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Post.css';
import Comment from './Comment';

function Post({ data }){    

  return (           
      <article id="post">            
        <ul>
          <li> 
            <img src={data.author.avatar} alt="profile"/>
          </li>
          <li>
            <div className="info">
              <strong>{data.author.name}</strong>
              <p>{data.date}</p>
            </div>
          </li>         
        </ul>
        <p>{ data.content }</p> 
        <hr />       
        
        {data.comments.map(comment => (
          <Comment 
             key={comment.id} 
            data={comment} 
          />
        ))}
      
      </article>   
  );
}

export default Post;