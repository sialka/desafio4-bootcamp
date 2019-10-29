import React, { Component } from 'react';
import './PostList.css';
import Post from './Post';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars3.githubusercontent.com/u/4948207?v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars3.githubusercontent.com/u/4948207?v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs e composto por alunos."
          },
          {
            id: 2,
            author: {
              name: "Alex Fernandes",
              avatar: "https://avatars3.githubusercontent.com/u/4948207?v=4"
            },
            content: "Conteúdo do comentário do Alex"
          }

        ]
      }, 
      {
        id: 2,
        author: {
          name: "Manoel Gonçalves",
          avatar: "https://avatars3.githubusercontent.com/u/4948207?v=4"
        },
        date: "05 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars3.githubusercontent.com/u/4948207?v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },       
    ]
  };

  render(){        
    return (      
      <div id="content">
        <ul>
          {this.state.posts.map(post => (            
            <Post 
              key={post.id}
              data={post}
            /> 
          ))}          
        </ul>        
      </div>    
    );
  }
}

export default PostList;