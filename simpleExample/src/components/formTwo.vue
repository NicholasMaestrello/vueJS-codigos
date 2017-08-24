<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form two - log in</h3>
        <p>Details for login</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>
<script>
import formHelper from './formHelper.vue'
export default {
  components: {
    'form-helper': formHelper
  },
  data(){
    return {

    }
  },
  methods: {
    handleSubmit: function () {
      console.log('formulario dois')
    }
  }
}
</script>

<style scoped>

</style>
