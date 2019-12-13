<template>
    <div class="type-button">
        <button :class="{'selection':!!dropValue.selection}" @click="click">
            {{dropValue.typeName}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "TypeButton",
        props:{
            value:{
                type:Object
            }
        },
        data(){
            return{
                dropValue:this.value
            }
        },
        methods:{
            click(){
                this.dropValue.selection = true;
                this.$emit('click',this.dropValue);
            }
        }
    }
</script>

<style scoped lang="scss">
    .type-button{
        >button{
            cursor: pointer;
            appearance: none;
            background-color: #f8f9fb;
            outline: none;
            border: 0;
            padding: 1rem;
            border-radius: 1.5rem;
            font-weight: 600;
            color: rgba(145,178,200,.95);
            font-size: 1.2rem;
        }
        >.selection{
            background-color: rgba(145,178,200,.95);
            color: white;
        }
    }
</style>