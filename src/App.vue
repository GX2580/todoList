<template>
  <TodoHeader @add-todo="handleAddTodo"></TodoHeader>
  <TodoList>
    <draggable :list="todos" animation="300" item-key="id">
      <template #item="{ element }">
        <TodoItem
          v-bind="element"
          @toggle="handleToggle"
          @edit="handleEdit"
          @del="handleDel"
        ></TodoItem>
      </template>
    </draggable>
  </TodoList>
  <TodoFooter
    :todos="todos"
    @toggle-all="handleToggleAll"
    @clear-done="handleClearDone"
    @clear-all="handleClearAll"
  ></TodoFooter>
</template>
<script setup>
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoItem from './components/TodoItem.vue'
import useTodos from './hooks/useTodos.js'
import draggable from 'vuedraggable'
const {
  todos,
  handleAddTodo,
  handleToggle,
  handleEdit,
  handleDel,
  handleToggleAll,
  handleClearDone,
  handleClearAll,
} = useTodos()
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
