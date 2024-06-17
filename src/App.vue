<script setup>
import { ref } from 'vue'
</script>

<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <div class="add-todo">
      <input type="text" placeholder="Please enter your to-do items" />
      <button>Add</button>
    </div>
  </header>
  <main class="todo-list">
    <ul>
      <li>
        <input type="checkbox" />
        <span>eat</span>
        <button>Delete</button>
      </li>
    </ul>
  </main>
  <footer class="todo-footer">
    <input type="checkbox" />
    <span>Done: 0 / All: 2</span>
    <button>Clear Done</button>
    <button>Clear All</button>
  </footer>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.todo-footer {
  margin-top: 20px;
  background-color: #87ceeb;
  display: flex;
  padding: 10px 40px;
}

.todo-footer span {
  flex: 1;
  margin-left: 20px;
}

.todo-footer button {
  margin-left: 10px;
  padding-inline: 10px;
  cursor: pointer;
}

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
