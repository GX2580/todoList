<template>
  <TodoHeader />
  <TodoList>
    <draggable :list="todos" animation="300" item-key="id">
      <template #item="{ element }">
        <TodoItem v-bind="element"></TodoItem>
      </template>
    </draggable>
  </TodoList>
  <TodoFooter :todos="todos" />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import draggable from 'vuedraggable'

import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFooter from './components/TodoFooter.vue'

import { useTodoStore } from './stores/todos'
const { todos } = storeToRefs(useTodoStore())
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
