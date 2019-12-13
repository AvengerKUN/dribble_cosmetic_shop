<template>
    <div class="theme-button" @click="click">
        <i :class="['icon',`ui-${icon}`]"></i>
    </div>
</template>

<script>
    export default {
        name: "ThemeButton",
        props:{
            icon:{
                type:String,
                required:true
            }
        },
        methods:{
            click(){
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .icon{
        display: block;
        width: 3rem;
        height: 3rem;
        background-color: rgba(145,178,200,.95);
        border-radius: 1rem;
    }
</style>