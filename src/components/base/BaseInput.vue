<template>
  <div class="input-container relative w-full flex flex-col">
    <label for="label" v-if="label" class="font-semibold">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="px-10 py-3 w-full bg-[#1d4354]/10 border-0 pl-12 text-wshite placeholder:text-black"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('handleFocus')"
      @blur="$emit('handleBlur')"
      @keyup.enter="$emit('handleEnter')"
      :class="inputClass"
      :id="label"
    />
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="absolute top-1/2 transform -translate-y-1/2 left-4 text-whsite"
    />
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})

defineEmits(['handleFocus', 'handleBlur', 'handleEnter', 'update:modelValue'])
</script>
