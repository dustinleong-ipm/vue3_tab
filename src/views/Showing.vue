<template>
  <div class="about">
    <h1>This is an showing page</h1>
    <form class="pure-form">
      <input type="text" v-model="firstName"/>
      <input type="text" v-model="lastName"/>
    </form>
    <p>{{fullName}}</p>
  </div>
</template>
<script>
export default {  
  data() {
      const firstName= 'PJ'
      const lastName= 'Chen'
    return{
      firstName,lastName
    }
  },
  computed:{
    fullName(){
      console.log('computed getter')
      return this.firstName+this.lastName
    }
  }
}
</script>