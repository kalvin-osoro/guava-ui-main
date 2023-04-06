<!-- <template>   
    <div class="container">
     <div class="row">
         <div class="col-12 text-center">
             <h3 class="pt-3">Our Categories</h3>
             <router-link :to="{ name: 'AddCategory' }">
                <button class="btn" style="float: right">Add Category</button>
                
             </router-link>
         </div>         
     </div>
     <div class="row">
         <div v-for="category of categories" :key="category.id" 
         class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
            <CategoryBox :category="category"> </CategoryBox>

         </div>
     </div>
    </div>
 
 </template>
 
 <script>
 
 const axios = require("axios");

import CategoryBox from '../../components/category/CategoryBox.vue';
 
 export default {   
    name: "CategoryView",
    components: { CategoryBox }, 
     data() {
         return{
            // http://localhost:8081/listProducts
            baseURL: "http://localhost:8081",            
            categories: []
            
         }
         
     },
     methods: {
        async getCategories() {
         // await axios.get(`${this.baseURL}/listProducts`)
           await axios.get(`http://localhost:8081/listProducts`)
           .then(res => this.categories = res.data)
           .catch(err => console.log(err))

        }
     },
     mounted() {
        this.getCategories();
     }
     }
 
 </script> 
 <style scoped> 
 </style> -->



 <template>   
   <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="pt-3">Our Products</h3>
            <router-link :to="{ name: 'AddProduct' }">
               <button class="btn" style="float: right">Add Product</button>
            </router-link>
        </div>         
    </div>
    <div class="row">
        <!-- <div v-for="category of categories" :key="category.id"  -->
        <div v-for="product of products" :key="product.id" 
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <ProductBox :product="product"/>
           <!-- <ProductBox :product="product" v-for="product in product.products" :key="product.id"> </ProductBox> -->
        </div>
    </div>
   </div>
</template>

<script>
const axios = require("axios");
import ProductBox from '../../components/product/ProductBox.vue';

export default {   
   name: "ProductView",
   components: { ProductBox }, 
   // props:["products"],
    data() {
        return{
           baseURL: "http://localhost:8080",            
           products: []
        }
    },
    methods: {
       async getProducts() {
          await axios.get(`${this.baseURL}/product/all`)
          
          .then(res => this.products = res.data)
          
          .catch(err => console.log(err))
          console.log(this.products )
       }
    },
    mounted() {
       this.getProducts();
    }
}
</script> 
<style scoped> 
</style>
