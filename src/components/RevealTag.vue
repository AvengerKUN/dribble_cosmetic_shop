<template>
    <div class="reveal-tag">
        <div class="txt-content">
            <span class="title">{{piece.title}}</span>
            <p class="subTitle">{{piece.subTitle}}</p>
        </div>
        <div class="handle">
            <i class="ui-love-89A9C4"></i>
            <i class=""></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RevealTag",
        props:{
            piece:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">
    .reveal-tag{
        padding: 1.5rem;
        height: 3rem;
        margin: 0 auto;
        background-color: white;
        border-radius: 2rem;
        box-shadow: 0 0 .5rem #f1f2fb;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        >.txt-content{
            flex: 8;
            >.title{
                font-weight: 900;
                color: #465c73;
                font-size: 1.2rem;
            }
            >.subTitle{
                margin: .5rem 0 0 0;
                color: #9ba6b3;
            }
        }
        >.handle{
            flex:2;
            display: flex;
            flex-direction: column;
            >i{
                flex: 1;
                background-size: auto 100%;
            }
        }
    }
</style>