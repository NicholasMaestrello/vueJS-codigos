var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! JS mastery'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message:'You loadede this page on' + new Date()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el:'#app-4',
  data: {
    todos: [
      {text: 'Learn Javascript'},
      {text: 'Learn Vue'},
      {text: 'Learn React'},
      {text: 'Learn ember'}
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello vueJS'
  },
  methods: {
    reverseMessage: function() {
      this.message=this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'hello vue'
  }
})

Vue.component('todo-item', {
  props:['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el:'#app-7',
  data:{
    groceryList: [
      {id:0, text: 'Vegetables'},
      {id:1, text:'Cheese'},
      {id:2, text:'Whatever else humans'}
    ]
  }
})
