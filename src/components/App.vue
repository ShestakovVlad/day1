<template>
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
                    <td><img v-bind:src="stud.photo"  width="50px"></td>
                    <td >
                        <div v-bind:style="idTest == stud._id ? 'display:none' : 'display:inline'">{{stud.name}}</div>
                        <input v-bind:style="idTest == stud._id ? 'display:inline' : 'display:none'"  v-model="names">
                    </td>
                    <td>
                        <div v-bind:style="idTest == stud._id ? 'display:none' : 'display:inline'">{{stud.group}}</div>
                        <input v-bind:style="idTest == stud._id ? 'display:inline' : 'display:none'" v-model="groups">
                    </td>
                    <td>
                        <div v-bind:style="idTest == stud._id ? 'display:none' : 'display:inline'">{{stud.mark}}</div>
                        <input v-bind:style="idTest == stud._id ? 'display:inline' : 'display:none'" v-model="marks">
                    </td>
                    <td>
                        
                        <div   type="checkbox" v-bind:style="idTest == stud._id ? 'display:none' : 'display:inline'" > <input type="checkbox" v-bind:checked="stud.isDonePr"></div>
                        <input type="checkbox" v-bind:style="idTest == stud._id ? 'display:inline' : 'display:none'" v-model="isDonePrs">
                    </td>
                    <td>
                        <a href="#" v-on:click="deletes(stud._id)">Видалити</a>
                    </td>
                    <td>
                        <button v-on:click="get(stud._id,stud.name,stud.group,stud.isDonePr,stud.mark)">
                            <img src="components/Pencil.svg.png" width="25px">
                        </button>
                    </td>
                    <button v-on:click="update()" v-bind:style="showInput ? 'display:inline' : 'display:none'">edit</button>
                </tr>
                Информация
            </table>
            Имя<input v-model="name">
            <br>
            Группа<input v-model="group">
            <br>
            Оценка<input v-model="mark">
            <br>
             Сдал<input type="checkbox" v-bind:checked="isDonePr">
             <br>
             <button v-on:click="add"> Добавить</button>
             

             
   </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

   export default {
    data: function() {
           return {
            students: [],
            currency:[],
            search:"",
            result:"",
            name:"",
            group:"",
            mark:0,
            isDonePr:false,
            names:"",
            groups:"",
            isDonePrs:false,
            names:"",
            groups:"",
            isDonePrs:false,
            studId:"",
             showInput:false,
            idTest:"",
            marks:0,
        }},
    
    
    mounted: function(){
        axios.get("http://46.101.212.195:3000/students").then((response)=>{
            console.log(response.data);
            this.students = response.data;
        })
       
    },
    methods:{
        deletes:function(id){
            Vue.axios.delete("http://46.101.212.195:3000/students/"+id, {
            })
            axios.get("http://46.101.212.195:3000/students").then((response)=>{
                this.students = response.data;
            })
            this.reload = "RELOAD THE PAGE!";
        },
         get: function(id,name,group,isDone,mark){
            this.studId = id;
            this.idTest = id;
            this.names = name;
            this.groups = group;
            this.marks =mark;
            this.isDonePrs = isDone;
            this.showInput = true;
        },
        update:function(){
            Vue.axios.put("http://46.101.212.195:3000/students/"+this.studId, {
                 name: this.names,
                group: this.groups,
                isDonePr: this.isDonePrs,
                mark:this.marks,
               
            })
            axios.get("http://46.101.212.195:3000/students").then((response)=>{
                this.students = response.data;
            })
            this.idTest = "";
        },
        
    add:function(){ 
            Vue.axios.post("http://46.101.212.195:3000/students", { 
                
                name: this.name, 
                group: this.group, 
                isDonePr: this.isDonePr, 
                mark:this.mark,
            }) 
            .then((response) => { 
                console.log(response.data) 
            }) 
            axios.get("http://46.101.212.195:3000/students").then((response)=>{ 
                this.students = response.data; 
            })
             
        },
        },

    
    }
 
    
</script>