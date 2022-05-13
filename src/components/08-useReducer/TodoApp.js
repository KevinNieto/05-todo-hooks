import React, { useEffect, useReducer } from 'react' 
import './styles.css'
import { todoReducer } from './todoReducer'
//import {useForm} from '../../hooks/useForm'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'






const init =()=>{
    //Recibiendo los todos de la local storage
    return JSON.parse(localStorage.getItem('todos')) || [];
    
    
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    
    // }]
}
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
   
    //GUARDANDO INFO EN EL LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )// No guarda arreglos solo strings
    }, [todos]);


    const handleDelete = (todoId) =>{
        console.log(todoId)
        //Accion
        const action ={
            type:'delete',
            payload: todoId
        }
        dispatch(action); //El que le manda la infomacion al Reducer
        
    }

    const handleToggle=(todoId)=>{
        dispatch({
            type: 'toggle', 
            payload: todoId
        })
    }

    const handleAddTodo =(newTodo)=>{
        dispatch({
            type:'add',
            payload: newTodo
        })
    }

    return (
    <>
        <h1>TodoApp ({todos.length})</h1>
        <hr/>
        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle ={handleToggle}
                />
            </div>


            <div className='col-5'>
                <TodoAdd handleAddTodo={handleAddTodo}/>
            </div>
        </div>
        

    </>
  )
}
