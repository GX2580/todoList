<template>
  <TodoHeader @add-todo="hadnleAddTodo"></TodoHeader>
  <TodoList :todos="todos"></TodoList>
  <TodoFooter></TodoFooter>
</template>
<script setup>
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'

const todos = ref([])
const hadnleAddTodo = (todo) => {
  todos.value.push(todo)
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
