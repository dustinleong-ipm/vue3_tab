<template>
  <div class="about">
    <h1>This is an showing page</h1>
    <form class="pure-form">
      <input type="text" v-model="firstName"/>
      <input type="text" v-model="lastName"/>
      <input type="text" v-model="testobj.value"/>
    </form>
    <p>{{fullName}}</p>
    <p>{{testobj.value}}</p>
  </div>
  <Child></Child>
</template>
<script>
//import Vue from "vue";
import {ref,reactive,readonly} from "vue";
import Child from "../views/Child.vue";

export default {  
  
   
  components: {
    Child,
  },
  data() {
      const firstName= ref('PJ')
      const lastName= ref('Cheddn')
      const testobj = reactive({
        value:1,
        str:'test'
      });
      console.log('showing.vue')
      //provide('firstName1',(()=>this.firstName2))
      //provide('lastName1',this.lastName)
    return{
      testobj,firstName,lastName
    }
  }, 
   
   provide() {
     return{
      //firstName1: Vue.computed(() => (this.firstName===null | this.firstName=== undefined)?"1":this.firstName),
      firstName1: this.firstName,
      //firstName1:  this.computed(() =>this.firstName.value),
      //firstName1:this.firstName,
      lastName1: readonly(this.lastName),
      //lastName: Vue.computed(() => this.lastName)
      testobj1:this.testobj
     }
  },
  
  computed:{
    fullName(){
      console.log('computed getter')
      return this.firstName+this.lastName
    },
    firstName2(){
      return this.firstName
    }
    
  },
  watch:{
    testobj:{
      deep:true,      
      handler(testobj){
        alert('parent testobj has changed'+testobj.value)
      }
    }
  }
}
</script>