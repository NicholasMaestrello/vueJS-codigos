<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import {bus} from '../main'
export default {
  props:{
    title:{
      type: String
    }
  },
  data () {
    return {
      title: 'Car sell'
    }
  },
  methods: {
    changeTitle: function () {
      //this.$emit('changeTitle', 'Vue Titlessss')
      this.title= 'vue magic'
      bus.$emit('titleChanged', 'vue new title')
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
