import { useState } from "react"
// import TodoClass from "../class/todoclass";

export const Todo: React.FC = ()=> {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState<string[]>([]);

const onClick = () =>{
    setTodos([...todos, todo]);
    setTodo('');
}

const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
setTodo(e.target.value);
}

// type RawCheck ={
//     name:string
//     len: number
// }

// const RawTodo: RawCheck[] = [
//     {
//         name:'test',
//         len: 1
//     },
//     {
//         name:'test1',
//         len: 2
//     },
//     {
//         name:'test2',
//         len: 3
//     },
// ]
return <div>
    <h3>Todos</h3>
    {/* {
     todos.map(mytodo => <li>{mytodo}</li>)
    } */}
    <input type="text" value={todo} onChange={onChange}/>
    <button onClick={onClick}>Add Todo</button>
    {/* {todos.map((todo:string)=>< TodoClass todo={todo}/>)} */}
</div>
}