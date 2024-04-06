/*
Button to import text to original field
List of notes in left field
Change all names from todo-list related stuff.
Clean up unused code

CURRENT: 
- How to import buttons from storybook?
- How to make "Objects/Items" that can show notes with headings and date? header+grid+clickable
    - PSEUDOCODE:
        def NoteItem(id, text, date):
            self.id = id
            <h>Note %date</>
            <grid xs=10> 
                %text
            <grid/>
            <grid xs=2> 
                <EditButton/>
            <grid/>
            
Make Original notes clickable to get to corresponding note id/date


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


import React, { useState } from "react";
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
//import { Button } from './components/SaveButton.tsx';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const gridBoxInactive = {
    margin: "8px",
    //border: "1px solid black"
};

const gridBoxActive = {
    margin: "8px",
    border: "1px solid black"
};



export const TodoList: React.FC = () => {
    return (
        <div className="main-container">
            <h1>MedBench</h1>
            <h2>writer</h2>
            <Box sx={{ width: 1200, flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                    <Grid xs={6}>
                        <h3 align="center">Notes</h3>
                        <Box
                            sx={{
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 250,
                                overflow: "hidden",
                                overflowY: "scroll",
                                margin: "10px",
                                border: "2px solid black"
                                // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                            }}
                        >
                            <Grid xs={12}>
                                <Grid container spacing={0}>
                                    <Grid xs={12}>
                                        <Box sx={gridBoxInactive}>
                                            <h4>Note header + Date</h4>
                                            Item #1 has a long text inside. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0}>
                                    <Grid xs={12}>
                                        <Box sx={gridBoxInactive}>
                                            <h4>Note header + Date</h4>
                                            Item #2 has a long text inside. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0}>
                                    <Grid xs={12}>
                                        <Box sx={gridBoxInactive}>
                                            <h4>Note header + Date</h4>
                                            Item #3 has a long text inside. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Box>
                    </Grid>

                    <Grid xs={6}>
                        <h3 align="center">Translations</h3>
                        <Box
                            sx={{
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 250,
                                overflow: "hidden",
                                overflowY: "scroll",
                                margin: "10px",
                                border: "2px solid black"
                                // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                            }}
                        >
                            <Grid xs={12}>
                                <Grid container spacing={0}>
                                    <Grid xs={11}>
                                        <Box sx={gridBoxActive}>
                                            <h4>Note header + Date</h4>

                                            <textarea rows="5" cols="15" />.

                                        </Box>
                                    </Grid>
                                    <Grid xs={1}>
                                        Button
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0}>
                                    <Grid xs={11}>
                                        <Box sx={gridBoxInactive}>
                                            <h4>Note header + Date</h4>
                                            Item #2 has a long text inside. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </Box>
                                    </Grid>
                                    <Grid xs={1}>
                                        EditButton
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0}>
                                    <Grid xs={11}>
                                        <Box sx={gridBoxInactive}>
                                            <h4>Note header + Date</h4>
                                            Item #3 has a long text inside. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </Box>
                                    </Grid>
                                    <Grid xs={1}>
                                        EditButton
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Box>
                    </Grid>

                </Grid >
            </Box >
        </div >
    );
}


/* WORKING EXAMPLE
export const TodoList: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
*/


/* OLD NON-GRID CODE
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
*/



/* OLD TODO LIST CODE
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