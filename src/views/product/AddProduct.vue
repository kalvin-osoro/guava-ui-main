<template>   
    <div class="container">
     <div class="row">
         <div class="col-12 text-center">
             <h3 class="pt-3">Add Product</h3>
         </div>
     </div>
     <div class="row">
         <div class="col-3"></div>
         <div class="col-6">
             <form action="">
             <div class="form-group">
                 <label for="">Name</label>
                 <input type="text" class="form-control" v-model="productDetails.name">
             </div>
             <div class="form-group">
                 <label for="">Description</label>
                 <textarea type="text" class="form-control" v-model="productDetails.description"/>
                 <!-- <input type="text" class="form-control"> -->
             </div>
             <div class="form-group">
                 <label for="">Price</label>
                 <input type="text" class="form-control" v-model="productDetails.price">
             </div>
             <div class="form-group">
                 <label for="">File</label>
                 <input type="file" class="form-control" @change="onFileSelected">
             </div>
             <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
             
         </form>
         </div>
         <div class="col-3"></div>
         
     </div>
    </div>
 
 </template>
 
 <script>
 import axios from 'axios';
 const sweetalert = require("sweetalert");
//  import swal from 'sweetalert';
 
 export default {    
     data() {
        //  return{
        //      name: "",
        //      price: "",
        //      description: "",
        //      file: null
        //  }
        return {
      productDetails: {
        name: '',
        price: '',
        description: '',
        
      },
      path: null
    };
         
     },
     methods: {
         onFileSelected(event) {
            //  this.file = event.target.files[0];
            this.path = event.target.files[0];
         },
         addProduct() {   
            // const productDetails =   {
            //     name: this.name,
            //     price: this.price,
            //     description: this.description,
            // }       
             const formData = new FormData();            
            //  formData.append('name', this.name);
            //  formData.append('price', this.price);
            formData.append("productDetails", JSON.stringify(this.productDetails))
            //  formData.append('description', this.description);
            //  formData.append('img', this.file);
            formData.append('img', this.path);

             console.log(formData)
 
             const baseURL = "http://localhost:8080"
             axios({
                 method: "post",
                 url: `${baseURL}/product/add-product`,                
                 data: formData,
                 headers: {
                     'Content-Type': 'multipart/form-data'
                    
                     
                 }
             })
             .then(() => {
                 sweetalert({
                     text: "Product added successfully",
                     icon: "success",
                 });
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
 