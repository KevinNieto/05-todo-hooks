//DEFINIMOS EL ESTADO INICIAL
const initialState =[{
    id: 1,
    todo: 'Comprar leche', 
    done: false
}]
//DEFINIMOS EL REDUCER
const todoReducer=(state = initialState, action)=>{
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    
    return state
}

let todos = todoReducer();


//DEFINIMOS EL NUEVO VALOR
const newTodo = {
    id: 2, 
    todo: 'Comprar pan', 
    done: false
}
//DEFINIMOS LA ACCION
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}
// EJECTAMOS LA OPERACION 
todos = todoReducer(todos, agregarTodoAction)

console.log(todos)