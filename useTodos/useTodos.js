import { useEffect, useReducer } from "react"
import { todoReducer } from "../05-useReducer/todoReducer"


const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Learn React',
  //   done: false
  // },
  //   {
  //   id: new Date().getTime() * 3,
  //   description: 'Learn Redux',
  //   done: false
  // },
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      // Almacena datos en localStorage
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatch(action)
    }

    const handleDeleteTodo = (todoId) => {
      const action = {
        type: '[TODO] Remove Todo',
        payload: todoId
      }
      dispatch(action)
    }

    const handleToggleTodo = (todoId) => {
      const action = {
        type: '[TODO] Toggle Todo',
        payload: todoId
      }

      dispatch(action)
    }


  return {
    todos,
    todosCount: todos.length,
    todosPendingCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  }
}
