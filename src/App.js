import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';


//123

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    newTaskTitleRef = React.createRef();
    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "medium"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "React", isDone: true, priority: "high"},
            {title: "SASS", isDone: false, priority: "medium"},
            {title: "Phyton", isDone: false, priority: "high"}
        ],

        filterValue: "Completed"
    }

    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef
        let newTask = {
            title: this.newTaskTitleRef.current.value,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        })
    };

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className="todoListheader">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef}
                                   type="text"
                                   placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>

                </div>
            </div>

        );
    }
}
//next task
export default App;

