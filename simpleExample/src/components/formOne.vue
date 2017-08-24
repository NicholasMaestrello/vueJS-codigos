<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form one - coments</h3>
        <p>Information of first form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <label>Your mensage:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
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
      console.log('formulario 1')
    }
  }
}
</script>

<style scoped>

</style>
