<script setup>
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<template>
  <TodoHeader></TodoHeader>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
