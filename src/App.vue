<template>
  <TodoHeader @add-todo="hadnleAddTodo"></TodoHeader>
  <TodoList :todos="todos">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind="todo"
      @toggle="handleToggle"
      @edit="hanleEdit"
    ></TodoListItem>
  </TodoList>
  <TodoFooter></TodoFooter>
</template>
<script setup>
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoListItem from './components/TodoListItem.vue'

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
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
