import React from 'react'
import { TodoItem } from '../MyComponents/TodoItem'

export const Todos = (props) => {

    const myStyle = {

        minHeight: "100vh",
        margin: "80px auto"
    }



    return (
        <div className="container my-3" style={myStyle}>
            <br />
            <h3 className="my-3">Todos List</h3>
            <br />
            {props.todos.length===0? "No Todos To Display" : 

            props.todos.map((todo) => {
                return (
                
                
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                )
            })
        }

        </div>
    )
}
