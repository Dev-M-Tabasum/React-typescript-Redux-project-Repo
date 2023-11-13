import * as React from "react";

interface TodoState {
    inputTodo: string,
    todos: string[]
}
class TodoClass extends React.Component{
state: TodoState = {
    inputTodo: '',
    todos: []

}
onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
this.setState({inputTodo : e.target.value})
}

onClick = () => {
    this.setState({todos : [...this.state.todos,this.state.inputTodo]})
}

render(): React.ReactNode {
    const {todos} = this.state;
        return (<div>
            <h3>Todos</h3>
            <input type="text" value={this.state.inputTodo} onChange={this.onChange}/>
            <button onClick={this.onClick}>Add Todo</button>
            {todos.map(todo => <h5>{todo}</h5>)}
                </div>
        ) 

    }
}

export default TodoClass;