import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter  from './TodoListFooter';
import TodoListTasks from './TodoListTasks';


//123

class App extends React.Component {
    render = () => {
        return (
            <div className="App"> 
            <div className="todoList">
               <TodoListHeader />
               <TodoListFooter />
               <TodoListTasks />
                  </div>
              </div>
        );
    }
}

export default App;

