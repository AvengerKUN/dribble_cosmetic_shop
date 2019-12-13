<template>
    <div class="reveal-parm">
        <div class="types">
            <type-button class="type-button" v-for="type in types" :key="type.id"
                :value="type" @click="click"></type-button>
        </div>
        <div class="number">
            <i class="but plus ui-add-9EBBCE" @click="dropValue++"></i>
            <i class="txt">{{dropValue}}</i>
            <i class="but reduce ui-reduce-6EBBCE" @click="dropValue ? dropValue-- : null"></i>
        </div>
    </div>
</template>

<script>
    import TypeButton from "./TypeButton";
    export default {
        name: "RevealParm",
        components: {TypeButton},
        data(){
          return{
              dropValue:this.value
          }
        },
        props:{
            types:{
                type:Array,
                required:true
            },
            value:{
                type:Number,
                required: true
            }
        },
        methods:{
            click(type){
                this.types.forEach(function (val) {
                    if(val.typeId !== type.typeId)
                        val.selection = false;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .reveal-parm{
        display: flex;
        .types{
            flex: 8;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            .type-button{
                display: inline-block;
            }
        }
        .number{
            min-height: 8rem;
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            i{
                width: 2rem;
                height: 2rem;
                text-align: center;
                color: #7b95ac;
                font-size: 1.5rem;
            }
            .txt{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .but{
                border-radius: 50%;
                border: .1rem solid #7b95ac;
            }
        }
    }
</style>