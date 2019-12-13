<template>
    <div class="reveal-swr">
        <swiper class="reveal-img-list" :options="revealSwiper">
            <swiper-slide class="img" v-for="(item,i) in images" :key="i"
                          :style="{background:`url(${item}) no-repeat scroll center`,backgroundSize:'auto 100%'}"></swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
        name: "RevealSwr",
        props:{
            images:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                revealSwiper:{
                    pagination:{
                        el: '.swiper-pagination',
                        bulletClass:'my-bullet',
                        bulletActiveClass:'my-bullet-active'
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .reveal-swr{
        width: 100%;
        height: 100%;
        background-color: #f1f2fb;
        position: relative;
        overflow: hidden;
        .reveal-img-list{
            width: 100%;
            height: 100%;
            >.img{
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination{
            width: 100%;
            height: .5rem;
            position: absolute;
            bottom: 5rem;
        }
    }
</style>