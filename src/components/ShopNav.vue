<template>
    <div class="shop-nav">
        <i class="ui-shopping-bcd0e1"></i>
        <div class="index">
            <div class="ui-home-2D4860">
                <span>Home</span>
            </div>
        </div>
        <i class="ui-pig-bcd0e1"></i>
        <i class="ui-signal-bcd0e1"></i>
    </div>
</template>

<script>
    export default {
        name: "ShopNav"
    }
</script>

<style scoped lang="scss">
    .shop-nav{
        width: 100%;
        height: 4rem;
        border-radius: 2.5rem;
        border: .1rem solid #f4f4f4;
        background-color: white;
        display: flex;
        box-sizing: border-box;
        padding: 1rem;
        >*{
            flex: 1;
        }
        >.index{
            display: flex;
            justify-content: center;
            align-items: center;
            >div{
                width: 6rem;
                height: 100%;
                background-color: #f8f9fb;
                border-radius: 2.5rem;
                background-size: auto 60%;
                background-position: 15%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span{
                    margin-right: 15%;
                    color: #2d4860;
                    font-weight: 600;
                    font-size: 1rem;
                }
            }
        }
        >i{
            background-size: auto 70%;
        }
    }
</style>