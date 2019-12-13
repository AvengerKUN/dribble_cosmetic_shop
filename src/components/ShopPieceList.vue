<template>
    <div class="shop-piece-list">
        <div class="piece-header">
            <h2>Categories</h2>
            <button class="ui-menu-line-BFBFBF"
                    :class="{selection:showType === 0}" @click="showType = 0"></button>
            <button class="ui-menu-BFBFBF"
                    :class="{selection:showType === 1}" @click="showType = 1"></button>
        </div>
        <div class="types">
            <shop-tool-touch class="shop-tool-touch">
                <type-button class="type-button" v-for="(item,i) in types"
                    :key="item.typeId" :value="item" @click="typeClick"></type-button>
            </shop-tool-touch>
        </div>
        <div class="content-list">
            <piece-list></piece-list>
        </div>
    </div>
</template>

<script>
    import ShopToolTouch from "./ShopToolTouch";
    import TypeButton from "./TypeButton";
    import {mapState} from "vuex";
    import PieceList from "./PieceList";
    export default {
        name: "ShopPieceList",
        components: {PieceList, TypeButton, ShopToolTouch},
        data(){
            return{
                showType:0
            }
        },
        computed:{
            ...mapState(["types"])
        },
        methods:{
            typeClick(type){
                this.types.forEach(function (val) {
                    if (val.typeId !== type.typeId){
                        val.selection = false
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .show-piece-list{
        width: 100%;
        min-height: 1000px;
        background-color: white;
        transform: translateY(-1rem);
        border-radius: 2rem 2rem 0 0;
        position: absolute;
    }

    .piece-header{
        width: 100%;
        >h2{
            float: left;
            left: 0;
            padding: 2rem;
        }
        >button{
            float: right;
            right: 0;
            bottom: 0;
            transform: translateY(50%);
            width: 3rem;
            height: 3rem;
            border-radius: 1rem;
            background-color: white;
            border: .1rem solid #f1f2fb;
            margin-right: 1rem;
            cursor: pointer;
        }
        >.selection{
            background-color: #f1f2fb;
        }
    }
    .types{
        width: 100%;
        .shop-tool-touch{
            .type-button{
                display: inline-block;
                margin: 0 1rem 0 1rem ;
            }
        }
    }
</style>