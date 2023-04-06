<template>   
    <div class="container">
     <div class="row">
         <div class="col-12 text-center">
             <h3 class="pt-3">Add Category</h3>
         </div>
     </div>
     <div class="row">
         <div class="col-3"></div>
         <div class="col-6">
             <form action="">
             <div class="form-group">
                 <label for="">Name</label>
                 <input type="text" class="form-control" v-model="categoryName">
             </div>
             <div class="form-group">
                 <label for="">Description</label>
                 <textarea type="text" class="form-control" v-model="description"/>
                 <!-- <input type="text" class="form-control"> -->
             </div>
             <div class="form-group">
                 <label for="">Image</label>
                 <input type="file" class="form-control" @change="onFileSelected">
             </div>
             <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
         </form>
         </div>
         <div class="col-3"></div>
         
     </div>
    </div>
 
 </template>
 
 <script>
 // import { application } from "express";
 
//  const axios = require("axios");
 import axios from 'axios';
 const sweetalert = require("sweetalert");
 export default {    
     data() {
         return{
             categoryName: "",
             description: "",
            //  imageUrl: ""
            file: null
         }
         
     },
     methods: {

        onFileSelected(event) {
            this.file = event.target.files[0];
        },

         addCategory() {
             const formData = new FormData();
             formData.append('categoryName', this.categoryName);
             formData.append('description', this.description);
             formData.append('file', this.file)           
             

             const baseURL = "http://localhost:8080"
             axios({
                 method: "post",
                 url:    `${baseURL}/category/create`,
                 data: formData,
                 headers: {
                     'Content-Type': 'multipart/form-data'
                    //  'Content-Type': 'application/json'
                 }
             })
             .then(() => {
                 sweetalert({
                     text: "Category added successfully",
                     icon: "success",
                 })
             })
             .catch((err) => {
                 console.log(err);
             })

             }        
 
         
     }
 }
 </script>
 
 <style scoped>
 
 </style>