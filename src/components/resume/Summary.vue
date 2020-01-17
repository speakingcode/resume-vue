<template>
  <div class='summary'>
    <h3>Summary:</h3>
    <p>
      {{summary}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    summary: String
  }
}
</script>
