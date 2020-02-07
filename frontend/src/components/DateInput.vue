<template>
  <input
    type="date"
    class="form-control"
    name="date"
    @input="$emit('input', $event.target.value)"
    :max="currentDate"
    :value="value"
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
