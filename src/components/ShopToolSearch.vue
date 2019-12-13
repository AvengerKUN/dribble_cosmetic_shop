<template>
    <div class="shop-tool-search ui-search-C6C6C6">
        <label v-show="!value">Search</label>
        <input class="search-input" v-model="value"/>
    </div>
</template>

<script>
    export default {
        name: "ShopToolSearch",
        data(){
            return{
                value:''
            }
        }
    }
</script>

<style scoped lang="scss">
    .shop-tool-search{
        width: calc(100% - 4rem);
        border-radius: 2rem;
        border: 0;
        display: flex;
        justify-content: left;
        align-items: center;
        background-color: white;
        height: 5rem;
        position: relative;
        padding-left: 4rem;

        >label{
            position: absolute;
            color: #c6c6c6;
            font-weight: 600;
        }

        .search-input{
            width: calc(90% - 4rem);
            position: absolute;
            outline: none;
            font-size: 1.2rem;
            font-weight: 600;
            background-color: transparent;
            border: 0;
        }
    }

    .ui-search-C6C6C6{
        background-size: auto 30%;
        background-position: 1.5rem center;
    }
</style>