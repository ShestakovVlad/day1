<template>
   <div>
    <div>  
        <table>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Group</th>
                    <th>Mark</th>
                    <th>PR is Done</th>
                </tr>
                <tr v-for="stud in students" v-bind:key="stud._id" >
                    <td>{{stud._id}}</td>
                    <td><img v-bind:src="stud.photo"  width="50px"></td>
                    <td v-bind:style="stud.name.indexOf(search)>-1 && search.length >0 ? 'background-color:#CA2C2C' : 'background-color:#fff'">{{stud.name}}</td>
                    <td>{{stud.group}}</td>
                    <td>{{stud.mark}}</td>
                    <td><input type="checkbox" v-bind:checked="stud.isDonePr"></td>
                </tr>
            </table>
   </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
   export default {
    data:{
        search:"",
        students:[],
        
    },
    methods:
    {
        deletePeople:function (id) {
            this. people =  this. people.filter(elem => elem.id!=id)
          }
        
    },
    mounted: function(){
        axios.get("http://46.101.212.195:3000/students").then((response)=>{
            console.log(response.data);
            this.students = response.data;
        })
       
    },
    methods:{
        deleteRow:function(id){
             this.students =  this.students.filter(stud => stud.id!=id)
        },
     
     }
 }
    
</script>