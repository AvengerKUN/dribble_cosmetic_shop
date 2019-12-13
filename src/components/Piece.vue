<template>
    <div class="piece" @click="click">
        <div class="piece-img" :style="{backgroundImage:`url(${piece.img})`,
            boxShadow:`0px 1rem 2rem -.8rem ${piece.color}`}"></div>
        <div class="piece-content">
            <p class="piece-title txt">{{piece.title}}</p>
            <p class="piece-subTitle txt">{{piece.subTitle}}</p>
            <p class="piece-cardTile txt">{{piece.cardTitle}}</p>
        </div>
        <div class="piece-oper">
            <div class="icon">
                <i class="ui-more-E0E0E0"></i>
            </div>
            <div class="icon">
                <i class="ui-add-6B53FC"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "Piece",
        props:{
            piece:{
                type:Object,
                required:true
            }
        },
        computed:{
            ...mapState(["selected"])
        },
        methods:{
            ...mapMutations(["setScrollTop","setSelected"]),
            click(){
                this.setScrollTop(document.documentElement.scrollTop);

                let app = document.querySelector("#app").getBoundingClientRect();
                let elThis = this.$el.getBoundingClientRect();
                let piece = this.piece;
                let rect = {
                    x:elThis.left - app.left - ~(this.$el.clientWidth/2),
                    y:elThis.top - app.top - ~(this.$el.clientHeight/2),
                    w:this.$el.clientWidth,
                    h:this.$el.clientHeight
                };

                this.setSelected({piece,rect});
            }
        }
    }
</script>

<style scoped lang="scss">
    .piece{
        border-radius: 1.5rem;
        background-color: #fafafa;
        margin: 1rem auto;
        padding: 1rem;
        width: 22rem;
        height: 8rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border: .1rem solid #f8f8f8;
        >div{
            display: inline-block;
        }
        .piece-img{
            height: 5rem;
            width: 5rem;
            background-position: center center;
            background-size: auto 100%;
            border-radius: 1.5rem;
        }
        .piece-content{
            margin-left: 1rem;
            width: 11rem;
            >.txt{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .piece-title{
                font-size: 1.2rem;
                color: #4f4f4f;
                font-weight: 900;
                margin-bottom: .5rem;
            }
            .piece-subTitle{
                font-size: 1rem;
                color:#5c5c5c;
                margin-bottom: .8rem;
            }
            .piece-cardTile{
                font-size: .9rem;
                color: #c3c9d0
            }
        }

        .piece-oper{
            width: 3rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            >.icon{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                >i{
                    width: 2rem;
                    height: 2rem;
                    border-radius: 1rem;
                }
            }
            >.icon:nth-child(2){
                >i{
                    background-color: white;
                }
            }
        }
    }
</style>