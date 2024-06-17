<template>
  <li class="todo-item">
    <input type="checkbox" :checked="done" @change="handleChange" />
    <input
      v-if="isEditing"
      v-focus
      type="text"
      :value="content"
      @blur="handleEdit"
    />
    <span v-else @click="isEditing = true">{{ content }}</span>
  </li>
</template>

<!-- 这个地方还是要自己去完成 -->
<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: String,
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
const emit = defineEmits(['toggle', 'edit'])
// const props = defineProps({
//   todo: {
//     type: Object,
//   },
// })

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
