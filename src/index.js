import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';
import Post from './components/post/Post'
import Mood from './components/mood/Mood'
import Todolist from './components/todolist/Todolist'
import FruitContainer from './components/fruitcontainer/FruitContainer'

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

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon',
];

ReactDOM.render(
  // <App />,
  // <Mood name={'Prima'} age={27} />,
  // <Post content={postData} />,
  // <Todolist doThese={todos_arr} />,
  <FruitContainer fruits={fruitList} />,
  document.getElementById('root')
)
