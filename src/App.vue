<template>
  <TodoHeader @add-todo="hadnleAddTodo"></TodoHeader>
  <TodoList :todos="todos">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind="todo"
      @toggle="handleToggle"
      @edit="hanleEdit"
      @del="handleDel"
    ></TodoItem>
  </TodoList>
  <TodoFooter
    :todos="todos"
    @toggle-all="handleToggleAll"
    @clear-done="handleClearDone"
    @clear-all="handleClearAll"
  ></TodoFooter>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoItem from './components/TodoItem.vue'

const todos = ref([])

const hadnleAddTodo = (todo) => {
  todos.value.push(todo)
}

const handleToggle = (id, checked) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  todos.value[index].done = checked
}

const hanleEdit = (id, content) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  todos.value[index].content = content
}
const handleToggleAll = (checked) => {
  todos.value.forEach((todo) => {
    todo.done = checked
  })
}
const handleClearDone = () => {
  todos.value = todos.value.filter((todo) => !todo.done)
}
const handleClearAll = () => {
  todos.value = []
}
const handleDel = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  todos.value.splice(index, 1)
}
watch(
  todos,
  () => {
    console.log('something changed')
    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  { deep: true }
)
onMounted(() => {
  //update data
  const data = JSON.parse(localStorage.getItem('todos') || '[]')
  todos.value = data
})
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
