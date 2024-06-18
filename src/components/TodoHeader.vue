<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <div class="add-todo">
      <input
        type="text"
        placeholder="Please enter your to-do items"
        v-model.trim="content"
      />
      <button @click="handleAdd">Add</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todos'

const { addTodo } = useTodoStore()

const content = ref('')

const handleAdd = () => {
  if (content.value) {
    const todo = {
      id: Date.now(),
      content: content.value,
      done: false,
    }
    addTodo(todo)
    content.value = ''
  } else {
    alert('Please enter your to-do items')
  }
}
</script>

<style scoped>
.todo-header {
  background-color: #0b87ff;
  text-align: center;
  padding: 5px 0 10px;
  color: #f0f8ff;
}

.todo-header .add-todo {
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
}

.todo-header .add-todo input {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  outline: none;
  border: solid 1px white;
}

.todo-header .add-todo button {
  display: inline-block;
  width: 80px;
  height: 30px;
  background-color: #eee;
  color: #0b87ff;
  line-height: 30px;
  border: none;
  border-radius: 3px;
}

.todo-header .add-todo button:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff6700;
}
</style>
