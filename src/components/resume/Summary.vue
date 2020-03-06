<template>
  <div class='summary'>
    <h3>{{name}}</h3>
    <h4>{{title}}</h4>
    <p>
      {{summary}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    summary: String,
    name: String,
    title: String
  }
}
</script>
