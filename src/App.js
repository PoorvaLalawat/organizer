import React from 'react';
import './App.css';
import {Container, Heading} from '@chakra-ui/react'
import AddTodo from './components/todoComponents/AddTodo';
import TodoList from './components/todoComponents/TodoList';
import VisibilityFilter from './components/todoComponents/VisibilityFilter';


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
    <Heading my="4"> Pomodoro</Heading>
    <span>Be productive!!</span>
    
    <div className='set-time-container'>
         <Timer />
         <div>
        <SessionTime /> 
        <BreakTime />
        </div>
    </div>
    </div> 

   </div>
  );
}

export default App;
