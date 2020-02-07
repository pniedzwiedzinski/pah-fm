<template>
  <input
    type="date"
    @change="syncToLocalStorage"
    @input="$emit('input', $event.target.value)"
    name="date"
    :max="currentDate"
    class="form-control"
  />
</template>

<script>
export default {
  name: 'DateInput',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      currentDate: new Date().toISOString().split('T')[0],
    };
  },
};
</script>
