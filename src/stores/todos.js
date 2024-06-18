import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useTodoStore = defineStore('todos', () => {
  const todos = ref([])
  const addTodo = (todo) => {
    todos.value.push(todo)
  }

  return {
    todos,
    addTodo,
  }
})
