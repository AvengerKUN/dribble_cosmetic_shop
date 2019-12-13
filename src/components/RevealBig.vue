<template>
    <div class="reveal-big">
        <div class="big" v-for="data in piece.dataContents">
            <h3 class="ui-spot-2D4360 title">{{data.title}}
                <span>{{data.subTitle}}</span>
            </h3>
            <p>{{data.content}}</p>
        </div>
        <reveal-parm class="reveal-parm" :types="piece.type" v-model="number"></reveal-parm>
    </div>
</template>

<script>
    import RevealParm from "./RevealParm";
    export default {
        name: "RevealBig",
        components: {RevealParm},
        data(){
            return{
                number:0
            }
        },
        props:{
            piece:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">
    .reveal-big{
        padding: 3rem 0 3rem 0;
        width: 100%;
        box-sizing: border-box;
        background-color: #fefefe;
        border-radius: 1.5rem 1.5rem 0 0;
        >.big,>.reveal-parm{
            padding: 3rem 3rem 0 3rem;
        }
        >.reveal-parm{
            padding-bottom: 5rem;
        }
        >.big{
            >.title{
                background-position: left 60%;
                background-size: auto 40%;
                padding-left: 2rem;
                font-weight: 900;
                >span{
                    margin-left: 1rem;
                    color: #b8c6d2
                }
            }
            >p{
                color:#6a899e;
                padding-top:1rem
            }
        }
    }
</style>