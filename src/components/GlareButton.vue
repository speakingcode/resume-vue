<template>
  <button
    class="glare-btn"
    :class="className"
    @click="go"
  >
    <slot></slot>
    <div class="glare"/>
  </button>
</template>

<style scoped>
.glare-btn {
  color: #e9e9e9;
  background-color: #39abe1;
  border-color: #3d9ac5;
  border-width: 1px;
  border-radius: 4px;
  padding: 10px;
  margin: auto;
  left: auto;
  top: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  overflow: hidden;
  display: block;
}

.glare-btn:hover {
  cursor: pointer;
}

.glare-btn:hover .glare {
  right: -45%;
  -webkit-transition: all 0.6s linear;
  transition: all 0.4s linear;
}

.glare:active {
  opacity: 0.95;
}

.glare {
  position: absolute;
  width: 25px;
  height: 200%;
  -webkit-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
        transform: rotate(25deg);
  background-color: rgba(255,255,255,0.3);
  top: -50%;
  right: 140%;
}

.glare:after {
  content: '';
  display: none;
  position: absolute;
  width: 10px;
  height: 100%;
  background: inherit;
  right: -15px;
  top: 0;
}
</style>

<script>
export default {
  data: () => ({
    className: ''
  }),
  props: {
    url: String
  },
  methods: {
    go: function () {
      window.location = this.url
    }
  }
}
</script>
