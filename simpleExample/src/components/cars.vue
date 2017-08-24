<template>
<div id="cars">
  <ul>
    <li v-for="car in cars" v-on:click="car.show = !car.show">
      <h2>{{car.name}}</h2>
      <h2 v-show="car.show">{{car.ano}}</h2>
    </li>
  </ul>
  <button v-on:click="deleteCar">Delete</button>
</div>
</template>

<script>
export default {
  props: {
    cars: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    deleteCar: function() {
      this.cars.pop()
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  }
}
</script>

<style scoped>
#cars{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 1px;
}
</style>
