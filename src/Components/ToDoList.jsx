import React from 'react';

const todos = [
  { text: "купить молоко", id: 0 },
  { text: "выучить React", id: 1 },
  { text: "погулять с собакой", id: 2 }
];

const Changecolor = () => {
  return <button style={{backgroundColor: "#333333"}}/>
};


const ToDoItem = ({ text }) => <button onClick={Changecolor}>{text}</button>;

const ToDoList = () => (
  <ul>
    {todos.map(todo => (
      <ToDoItem key={todo.id} text={todo.text} />
    ))}
  </ul>
);


export default ToDoList;