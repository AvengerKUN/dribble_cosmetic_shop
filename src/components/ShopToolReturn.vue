<template>
    <div class="shop-tool-return">
        <i :class="['icon',`ui-${icon}`]"></i>
    </div>
</template>

<script>
    export default {
        name: "ShopToolReturn",
        props:{
            icon:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped>
    .icon{
        display: block;
        width: 3rem;
        height: 5rem;
        background-color: white;
        border-radius: 1.5rem;
    }
</style>