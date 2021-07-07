<template>
  <div class="about">
    <h1>This is an child page</h1>
    <input type="text" v-model="testobj1.value"/>
    <button @click="modifySomething">modify</button>
    <p>{{this.firstName1}}</p>
    <p>{{this.firstName3}}</p>
    <p>{{this.lastName}}</p>
    <p>{{this.testobj1.value}}</p>
  </div>
</template>

<script>
import {  inject } from 'vue'
export default {
    name: "Child",
    inject:['firstName1','testobj1'],
    data(){
       
        const lastName = inject('lastName1')
        return {
          lastName
        }
    },
    computed:{
      firstName3(){
        return this.firstName1
        //return inject('firstName1')
      }
    },
    methods:{
      modifySomething(){
        //alert('test');
        this.testobj1.value =1;
      }
    },
    watch:{
    testobj1:{
      deep:true,      
      handler(testobj1){
        alert('child testobj has changed'+testobj1.value)
      }
    }
  }
    
}
</script>