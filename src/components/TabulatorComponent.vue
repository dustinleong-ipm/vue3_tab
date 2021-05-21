<template>
  <div
    ref="table"
    class="tabulator"
  ></div>
</template>

<script>
import { defineComponent,ref,reactive } from 'vue';
import Tabulator from 'tabulator-tables';
import merge from '../utilities/merge';
import mergeWith from 'lodash.mergewith';
import eventFactory from '../feature/event-factory';
import cellEvents from '../feature/events/cell-events';
import rowEvents from '../feature/events/row-events';
import _ from 'lodash';



export default defineComponent({
  name: 'TabulatorComponent',
  props: {
    options: {
      type: Object ,
      required: false,
    },
    modelValue: Object,
    /** 
    data: {
      type: Object,
      required: false,
    },   **/
  }, 
  data(props) {
   
    const dog='dog'
    const optionsData = ref(props.options)
    const resolvedOptions =ref({})
    

    console.log('data phrase')
    console.log(optionsData)
    console.log(props.options)
    console.log(props.modelValue)
    /** 
    const tabulatorInstance  = new Tabulator(
        (this.$refs.table ),
        props.options
      );  **/  
    return{
    //resolvedOptions,optionsData,dog,tableData:ref(props.modelValue),tabulatorInstance :ref(null) //tabulatorInstance//,vm
      resolvedOptions,optionsData,dog,tableData:reactive(props.modelValue),tabulatorInstance :reactive(null) //tabulatorInstance//,vm
    }
    
  },computed:{
    eventOptions(){
      const events = eventFactory.bind(this);
      return { ...events(rowEvents), ...events(cellEvents) };
    }
  },
  beforeCreate(){
    console.log('before create phrase')
   
    console.log(this.optionsData)       
    
  },
  mounted(){
    //this.createTable()    
    this.updateOptions()
  },
  watch: {        
    /**
    optionsData(newOptionsData){
      console.log('trigger')
      console.log(newOptionsData)     
      this.resolvedOptions = {
          ...mergeWith({}, this.eventOptions,this.optionsData, merge),
          data: this.tableData,
      };
      this.createTable();
    },**/
    
    optionsData:{
      deep:true,
      immediate:true,
      handler(optionsData){
        console.log(optionsData);
        /** 
        this.resolvedOptions = {
          ...mergeWith({}, this.eventOptions,optionsData, merge),
          data: this.tableData,
        };
        this.createTable();
        **/
       this.updateOptions()
      }
    },
    tableData:{
      deep:true,
      immediate:true,
      handler(tableData){
        console.log(tableData);
        console.log('table data was triggered');
        if(this.tabulatorInstance !== undefined & _.isEmpty(this.$refs)==false){                  
          var ta=this.tabulatorInstance;
          ta.setData(tableData);
        }
      }
    }
  },
  setup(){
    /** 
    watch(()=>this.tableData,(oldValue,newValue) => {
      console.log(
        "Watch props.selected function called with args:"+oldValue+" "+newValue
      );
      // Both props are undefined so its just a bare callback func to be run
    }, {deep: true, immediate: true});
    **/
 
  }, 
  methods: {    
    createTable() {
      console.log('1')
      console.log(this.$refs.table)
       this.tabulatorInstance = new Tabulator(
        (this.$refs.table ),
        //this.optionsData
        this.resolvedOptions
      );
      console.log(this.options)
      console.log('2')
      
    },
    updateOptions() {
       this.resolvedOptions = {
      ...mergeWith({}, this.eventOptions, this.optionsData, merge),
      data: this.tableData,
      };

    this.createTable();
    }
  }, 

  
});

/**
function tableData(tableData: any, arg1: (first: any, second: any) => void) {
  throw new Error('Function not implemented.');
}**/
</script>