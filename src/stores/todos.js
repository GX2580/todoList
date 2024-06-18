import { defineStore } from 'pinia'
export const useTodoStore = defineStore('todos', () => {
  const todos = ref([])
  const addTodo = (todo) => {
    todos.value.push(todo)
  }
})
