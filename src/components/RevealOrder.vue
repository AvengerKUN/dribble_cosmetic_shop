<template>
    <div class="reveal-order">
        <span>Place Order</span>
        <i class="ui-forward-9ebbce"></i>
    </div>
</template>

<script>
    export default {
        name: "RevealOrder"
    }
</script>

<style scoped lang="scss">
    .reveal-order{
        width: 100%;
        height: 5rem;
        background-color: #b5cddf;

        >*{
            position: absolute;
        }
        >span{
            font-size: 1.3rem;
            font-weight: 600;
            color: #fafcfc;
            top: 50%;
            left: 10%;
            transform: translateY(-50%);
        }
        >i{
            width: 2rem;
            height: 2rem;
            background-color: #fafcfc;
            border-radius: 1rem;
            top: 50%;
            right: 10%;
            transform: translateY(-50%);
        }
    }
</style>