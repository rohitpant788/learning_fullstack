import React, { useState } from 'react'

function App () {

  const [todos,setTodos]= useState([
    {
      "id" : 1,
      "title" : "go to Gym",
      "description" : "Go to the Gym today",
    },
    {
      "id" : 2,
      "title" : "eat food ",
      "description" : "eat food ",
    },
    {
      "id" : 3,
      "title" : "go to class",
      "description" : "go to class",
    }
  ])
  return (
    <div>
      {todos.map(todo => <Todo title={todos.title} description={todos.description}/>) }
    </div>
  )
}

function Todo({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App
