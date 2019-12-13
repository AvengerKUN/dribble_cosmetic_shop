<template>
    <div class="shop-tool-touch" ref="win" @touchstart="touchstart"
        @touchmove="touchmove" @touchend="touchend ">
        <div class="list" ref="list" :style="{left:`${left}px`}">
            <slot class="block"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopToolTouch",
        data(){
            return{
                left:0,
                hleft:0,
                startClientX:0,
                clientX:0,
                w:0,
                xh:0,
                slow:0,
                slowTimeout:null
            }
        },
        methods:{
            touchstart(data){
                this.$refs.list.style.transition = null;
                this.left = parseInt(this.$refs.list.style.left);
                this.startClientX = data.touches[0].clientX;
                this.slow = 0;
            },
            touchmove(data){
                this.clientX = data.touches[0].clientX;
                let left = this.clientX - this.startClientX;
                left = left + this.hleft;
                this.calLeft(left);

                this.slow = this.xh - left;
                this.xh = left;
            },
            touchend(){
                let _this = this;
                this.$refs.list.style.transition = `${Math.abs(_this.slow)/100}s`;
                this.slowTimeout = setTimeout(function () {
                    _this.calLeft(_this.left+~(_this.slow*10));
                    _this.hleft = _this.left;
                },0);
            },
            calLeft(left){
                left = left > 0 ? 0 : left;
                left = left < this.w ? this.w : left;
                this.left = left;
            }
        },
        mounted() {
            this.w = this.$refs.win.clientWidth - this.$refs.list.clientWidth;
        }
    }
</script>

<style scoped lang="scss">

    .shop-tool-touch{
        width: 100%;
        overflow: hidden;
        >.list{
            position: relative;
            float: left;
            white-space: nowrap;
            left: 0;
        }
    }

</style>