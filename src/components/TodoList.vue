<template>
  <main class="todo-list">
    <ul>
      <li>
        <input type="checkbox" />
        <span>eat</span>
        <button>Delete</button>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.todo-list ul {
  list-style: none;
}

.todo-list li {
  list-style: none;
  position: relative;
  padding-inline: 40px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.todo-list li:hover {
  background-color: #ddd;
}

.todo-list li input[type='text'] {
  flex: 1;
  margin-left: 10px;
  border: none;
  color: #00f;
}

.todo-list li span {
  flex: 1;
  margin-left: 20px;
}

.todo-list li span.done {
  text-decoration: line-through;
  color: red;
}

.todo-list li button {
  padding-inline: 10px;
  outline: none;
}

.todo-list li button:hover {
  cursor: pointer;
}
</style>
