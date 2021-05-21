<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/showing">Showing</router-link>
  </div>
  <div id ="App">
    <VueTabulator
      v-model="data"
      :options="options"
    />
    <button
      id="row"
      @click="newRow"
    >new row
    </button>

    <button
      id="column"
      @click="newColumn"
    >
      New Column
    </button>
  </div>
  <router-view />
</template>
<script>

import VueTabulator from '@/components/TabulatorComponent.vue'


export default {
  name: 'App',
  components: {
    VueTabulator
  },
  data()  {
    const columns = [{
      title: 'Name',
      field: 'name',
      sorter: 'string',
      width: 200,
      editor: true,
    },];
    const data = [{ name: 'Teste', age: 13 }];
    const vm = this;
    const options
    = {
        columns: columns,
        rowClick(e, row) {
        console.log('I clicked a row', vm, e, row);        
      },
        
      };    
    return {
      columns,data,options,vm
    }
  },
  methods: {
    newRow() {
    console.log('new row')
    this.data.push({ name: 'Teste 2', age: 15 });
    },
    newColumn() {    
    this.options.columns?.push({
      title: 'age',
      field: 'age',
      sorter: 'number',
      width: 300,
      editor: false,
    });
  }
  },

}
</script>
<style lang="scss">
@import "./scss/bootstrap/tabulator_bootstrap4";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
