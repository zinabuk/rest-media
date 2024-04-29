<template>
  <div class="input-container relative w-full">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"
      :class="textareaClasses"
      class="px-10 py-3 w-full bg-[#1d4354]/10 pl-12  placeholder:text-black"
    ></textarea>
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="absolute top-[16px] transform -tranlslate-y-1/2 left-4 texdt-white"
    />
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

// Define props
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Enter text...'
  },
  rows: {
    type: [String, Number],
    default: 3
  },
  cols: {
    type: [String, Number],
    default: 30
  },
  textareaClasses: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
