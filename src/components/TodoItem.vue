<template>
  <li class="todo-item">
    <input type="checkbox" :checked="done" @change="handleChange" />
    <input
      v-if="isEditing"
      v-focus
      type="text"
      :value="content"
      @blur="handleEdit"
      @keyup.enter="handleEdit"
    />
    <span v-else @click="isEditing = true" :class="{ delete: done }">{{
      content
    }}</span>
    <button @click="$emit('del', id)">删除</button>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['toggle', 'edit', 'del'])

// 创建一个获得焦点的自定义指令, 约定: v-focus. vFocus
const vFocus = {
  // 指令的生命周期函数: 当指令绑定的元素在挂载到dom完成时调用
  mounted(el) {
    // el 是当前dom元素 input
    el.focus()
  },
}
const isEditing = ref(false)

const handleChange = (event) => {
  emit('toggle', props.id, event.target.checked)
}

const handleEdit = (event) => {
  isEditing.value = false

  if (event.target.value.trim()) {
    emit('edit', props.id, event.target.value.trim())
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 40px;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.todo-item span,
.todo-item input[type='text'] {
  flex: 1;
  margin: 0 20px;
}
.todo-item button {
  padding: 0 10px;
}
.todo-item .delete {
  color: red;
  text-decoration: line-through;
}
</style>
