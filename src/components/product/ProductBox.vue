<!-- <template>
    <div class="card w-100 h-100" style="margin-top: 10px"> 
        <div class="embed-responsive embed-responsive-16by9">
            <img src="product.image" alt="" class="card-img-top">
        </div>         
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
                {{ product.price }}
            </p>
            <a href="" class="btn btn-primary">Go somewhare</a>
            
        </div>
    </div>
</template>
<script>

export default {

    name: "CategoryBox",
    props: ["category"],
    methods: {},     
    }
</script>

<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>

 -->




 <template>
    <div class="card w-100 h-100" style="margin-top: 10px"> 
        <div class="embed-responsive embed-responsive-16by9">
            <!-- <img :src="product.image" alt="" class="card-img-top"> -->
            <img :src="product.path" alt="" class="card-img-top">
        </div>         
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            
            <p class="card-text">
                {{ product.price }}
            </p>
            <p class="card-text">
                {{ product.description }}
            </p>
            <a href="" class="btn btn-primary">Go somewhere</a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductBox",
    props: ["product"],
    methods: {},     
}
</script>

<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>



