<template>
    <div class="index">
        <transition name="show-list">
            <div class="index_shop" v-show="!selected" ref="shop">
                <shop-head></shop-head>
                <shop-piece-list></shop-piece-list>
                <shop-nav class="shop-nav"></shop-nav>
            </div>
        </transition>
        <reveal-content></reveal-content>
    </div>
</template>

<script>
    import ShopHead from "../components/ShopHead";
    import ShopPieceList from "../components/ShopPieceList";
    import ShopNav from "../components/ShopNav";
    import {mapState} from "vuex";
    import RevealContent from "../components/RevealContent";
    export default {
        name: "Index",
        components: {RevealContent, ShopNav, ShopPieceList, ShopHead},
        computed:{
            ...mapState(["selected"])
        }
    }
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
    }

    .show-list-enter-active,.show-list-leave-active{
        transition: all 1s ease;
    }

    .shop-nav{
        width: 95%;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        bottom: 5vh;
    }
</style>