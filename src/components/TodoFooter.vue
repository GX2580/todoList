<template>
  <footer v-if="todos.length" class="todo-footer">
    <input type="checkbox" :checked="allDone" @change="toggleAll" />
    <span>Done: {{ doneCount }} / All: {{ allCount }}</span>
    <button @click="clearDone">Clear Done</button>
    <button @click="clearAll">Clear All</button>
  </footer>
  <h2 v-else class="none-todo">Nothing</h2>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['toggle-all', 'clear-done', 'clear-all'])

const allDone = computed(() => props.todos.every((todo) => todo.done))
const doneCount = computed(() => props.todos.filter((todo) => todo.done).length)
const allCount = computed(() => props.todos.length)

const toggleAll = (event) => {
  emit('toggle-all', event.target.checked)
}

const clearDone = () => {
  emit('clear-done')
}

const clearAll = () => {
  emit('clear-all')
}
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

.none-todo {
  text-align: center;
  margin-top: 20px;
  color: #888;
}
</style>
