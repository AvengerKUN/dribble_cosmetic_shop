<template>
    <div class="shop-head">
        <div class="call">
            <user-call-text></user-call-text>
        </div>
        <div class="user">
            <theme-button :icon="'user-default-head-FFFFFF'"></theme-button>
        </div>
        <div class="return">
            <shop-tool-return :icon="'return-96B5CA'"></shop-tool-return>
        </div>
        <div class="search">
            <shop-tool-search></shop-tool-search>
        </div>
    </div>
</template>

<script>
    import UserCallText from "./UserCallText";
    import ThemeButton from "./ThemeButton";
    import ShopToolReturn from "./ShopToolReturn";
    import ShopToolSearch from "./ShopToolSearch";
    export default {
        name: "ShopHead",
        components: {ShopToolSearch, ShopToolReturn, ThemeButton, UserCallText}
    }
</script>

<style scoped lang="scss">
    .shop-head{
        position: relative;
        width: 100%;
        height: 15rem;
        background-color: #f9fafc;

        >div{
            display: inline-block;
            position: absolute;
        }

        >.call{
            left: 32px;
            top: 64px;
            transform: translateY(-50%);
        }

        >.user{
            right: 32px;
            top: 64px;
            transform: translateY(-50%);
        }

        >.return{
            left: 32px;
            bottom: 32px;
        }

        >.search{
            width: 65%;
            bottom: 32px;
            right: 32px;
        }
    }
</style>