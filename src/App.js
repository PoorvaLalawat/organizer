import React from 'react';
import './App.css';
import {Container, Heading} from '@chakra-ui/react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';


import BreakTime from './components/pomodoroComponents/BreakTime';
import SessionTime from './components/pomodoroComponents/SessionTime';
import Timer from './components/pomodoroComponents/Timer';

function App() {
  return (
    <div className='App-container'>


      {/* for todo list */}
        <div className='main-one'>
    <Container maxW="container.sm">
      <Heading my="4"> Todo List</Heading>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </Container>
    </div>

{/* FOR POMODORO */}
     <div className='main-two'>
    <h1 style={{color: 'greenyellow', fontSize:'1.5rem'}}>Pomodoro</h1>
    <small>Be productive</small>
    <Timer />
    <div className='set-time-container'>
        <SessionTime />
       
        <BreakTime />
    </div>
    </div> 

   </div>
  );
}

export default App;
