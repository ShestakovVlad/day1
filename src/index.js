import Vue from 'vue'
var app = new Vue({
    el:'#n1',
    data:{
        search:"",
        people:[
            {"id":1,"pib":"Shestakov Vlad","grupa":"rpz 182.9","god":2003,"zdal":""},
            {"id":2,"pib":"Slavnii Dmitri","grupa":"rpz 182.9","god":2002,"zdal":""},
            {"id":3,"pib":"Sirii Anatolii","grupa":"rpz 182.9","god":2001,"zdal":""},
            {"id":4,"pib":"Volosko Sergei","grupa":"rpz 182.9","god":2000,"zdal":""},


        ],
    },
    methods:{
        deletePeople:function (id) {
            this. people =  this. people.filter(elem => elem.id!=id)
          }
        
    }
})

