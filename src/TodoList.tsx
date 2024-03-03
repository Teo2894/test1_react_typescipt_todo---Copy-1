import React, { useState } from "react";

/*
Button to import text to original field
List of notes in left field
Change all names from todo-list related stuff.
Clean up unused code

https://mui.com/ - use grids m.m.
https://storybook.js.org/
npm run storybook



class Note { 
    title: string;
    text: string
}

const note1 = new Note (
    title = "Note1Title";
    text = "Note1Text"
)
const note2 = new Note (
    title: "Note2Title";
    text: "Note2Text"
)
*/




export const TodoList: React.FC = () => {
    return (
        <div className="main-container">
            <h1>MedBench</h1>
            <h2>writer</h2>
            <div class="flex-container">
                <div>
                    <textarea id="messageBox"
                        placeholder="Original"
                        onChange={(e) => setInput(e.currentTarget.value)}
                    ></textarea>
                </div>
                <div>
                    <textarea id="messageBox"
                        placeholder="Translation"
                        onChange={(e) => setInput(e.currentTarget.value)}
                    ></textarea>
                </div>
            </div>
            <ul>test</ul>


        </div>
    );
}


/*
interface item {
    id: number;
    text: string;
    completed: boolean;
}


export const TodoList: React.FC = () => {
    const [todos,setTodos] = useState<item[]>([
        {id: 1, text:"Learn TypeScript with George", completed: false},
        {id: 2, text:"Build TodoList", completed: false},
    ]);
    const [input, setInput] = useState<string>("");

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        );
    };

    const handleClick = ()=> {
        const newTodo: item = {id: Date.now(), text: input,completed:false};
        setTodos([...todos, newTodo]);
    };
    
    return (
        <div className="main-container">
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        onClick={()=> handleToggle(todo.id)} 
                        style={{textDecoration: todo.completed ? "line-through":"none"}}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                placeholder="Add todo item" 
                onChange={(e) => setInput(e.currentTarget.value)}
                />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};
*/