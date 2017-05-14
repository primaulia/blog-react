import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';
import Post from './components/post/Post'
import Mood from './components/mood/Mood'
import Todolist from './components/todolist/Todolist'

import './index.css'

const postData = {
  title: 'Dinosaurs are awesome',
  authors: [
    'Stealthy Stegosaurus',
    'Tiny Trex',
    'Ivory Iguanadon'
  ],
  body: 'Check out this body property',
  comments: [
    'First!',
    'Great post',
    'Hire this author now!'
  ]
}

const todos_arr = [
  'Buy an Ice Cream',
  'Go hike and bike',
  'Lose them bellies'
]

ReactDOM.render(
  // <App />,
  // <Mood name={'Prima'} age={27} />,
  // <Post content={postData} />,
  <Todolist doThese={todos_arr} />,
  document.getElementById('root')
)
