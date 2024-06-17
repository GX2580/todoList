<template>
  <footer class="todo-footer">
    <input type="checkbox" />
    <span>Done: 0 / All: 2</span>
    <button>Clear Done</button>
    <button>Clear All</button>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
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
</style>
