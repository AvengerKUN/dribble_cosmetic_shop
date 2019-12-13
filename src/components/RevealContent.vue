<template>
    <div class="reveal-content">
        <transition name="show" @before-leave="beforeLeave"
            @leave="leave" @before-enter="beforeEnter"
            @enter="enter" @after-enter="afterEnter">
            <div class="content" v-if="selected" ref="content">
                <theme-button class="user-button" :icon="'user-default-head-FFFFFF'"></theme-button>
                <theme-button class="return-button" :icon="'return-FFFFFF'" @click="setSelected(null)"></theme-button>
                <reveal-swr class="reveal-swr" :images="selected.piece.images"></reveal-swr>
                <reveal-tag class="reveal-tag" :piece="selected.piece"></reveal-tag>
                <reveal-big class="reveal-big" :piece="selected.piece"></reveal-big>
            </div>
        </transition>
        <reveal-order class="reveal-order" v-if="selected"></reveal-order>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import ThemeButton from "./ThemeButton";
    import RevealSwr from "./RevealSwr";
    import RevealTag from "./RevealTag";
    import RevealBig from "./RevealBig";
    import RevealOrder from "./RevealOrder";

    export default {
        name: "RevealContent",
        components: {RevealOrder, RevealBig, RevealTag, RevealSwr, ThemeButton},
        computed:{
          ...mapState(["selected","scrollTop"])
        },
        data(){
          return{
              piece: null,
              rect: null,
              orderTop:0
          }
        },
        methods:{
            ...mapMutations(["setSelected","setScrollTop"]),
            beforeEnter(el){
                this.piece = this.selected.piece;
                this.rect = this.selected.rect;

                Object.assign(el.style,{
                    position:'absolute',
                    left:`${this.rect.x}px`,
                    top:`${this.rect.y}px`,
                    transform:'translate3d(-50%,-50%,0)',
                    borderRadius:'1.5rem',
                    opacity:1
                })
            },
            enter(el){
                let app = document.querySelector("#app").getBoundingClientRect();
                Object.assign(el.style,{
                    top:`${~app.y}px`,
                    left: 0,
                    width:'100%',
                    height:'100%',
                    borderRadius: 0,
                    transform: 'translate3d(0,0,0)',
                    opacity: 1
                })
            },
            afterEnter(el){
                Object.assign(el.style,{
                    position: 'fixed',
                    top: 0,
                    left: 0
                })
            },
            beforeLeave(el){
                Object.assign(el.style,{
                    position:'absolute',
                    left:`${this.rect.x}px`,
                    top:`${this.rect.y}px`,
                    transform:'translate3d(-50%,-50%,0)',
                    borderRadius:0,
                    opacity:1
                });
                document.documentElement.scrollTop = this.scrollTop
            },
            leave(el){
                Object.assign(el.style,{
                    width: '22rem',
                    height: '8rem',
                    borderRadius:'1.5rem',
                    opacity:1
                })
            }
        }
    }
</script>

<style scopedl lang="scss">

    @import "../assets/css/effect";

    .content{
        position: relative;
        width: 22rem;
        height: 8rem;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #4f4f4f;
        overflow: scroll;
        .reveal-swr,.reveal-tag,.user-button,.return-button,.reveal-big{
            position: absolute;
        }
        .user-button{
            display: flex;
            z-index: 2;
            right: 32px;
            top: 64px;
            transform: translateY(-50%);
            @include animation-top-to-bottom('user-button',0%,-50%,'1s 1')
        }
        .return-button{
            display: flex;
            z-index: 2;
            left: 32px;
            top: 64px;
            transform: translateY(-50%);
            @include animation-top-to-bottom('user-button',0%,-50%,'1s 1')
        }
        .reveal-swr{
            top: 0;
            width: 100vw;
            height: 110vw;
            @include animation-top-to-bottom('reveal-swr',0%,0%,'1s 1')
        }
        .reveal-tag{
            top: 110vw;
            width: 80vw;
            left: 50%;
            z-index: 2;
            transform: translate3d(-50%,-60%,0);
            @include animation-top-to-bottom('reveal-tag',-50%,-60%,'1s 1')
        }
        .reveal-big{
            z-index: 1;
            top: 110vw;
            left: 50%;
            transform: translate3d(-50%,-1.5rem,0);
            @include animation-top-to-bottom('reveal-big',-50%,-1.5rem,'1s 1')
        }
    }
    .reveal-order{
        position: fixed;
        bottom: 0;
        z-index: 3;
        border-radius: 2rem 2rem 0 0;
        @include animation-top-to-bottom('reveal-order',0%,0%,'1s 1')
    }

    .show-enter-active,
    .show-leave-active{
        transition: all s ease;
    }
</style>