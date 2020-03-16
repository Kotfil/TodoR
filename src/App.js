import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';


//123

class App extends React.Component {
    tasks = [
        {title: "JS", isDone: true},
        {title: "CSS", isDone: true},
        {title: "React", isDone: true},
        {title: "SASS", isDone: false},
        {title: "Phyton", isDone: false}
];

    filterValue='Completed'

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListFooter filterValue={this.filterValue}/>
                    <TodoListTasks tasks={this.tasks}/>

                </div>
            </div>

        );
    }
}

export default App;

