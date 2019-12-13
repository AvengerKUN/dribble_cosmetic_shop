<template>
    <div class="user-call-text">
        <h3 class="call-text">
            <p class="call-hello">Hello,</p>
            <span class="call-username">{{user.userName}}</span>
        </h3>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "UserCallText",
        computed:{
            ...mapState(["user"])
        }
    }
</script>

<style scoped lang="scss">

    .call-text{
        font-weight: 500;
        font-size: 25px;
        .call-hello{
            color: rgba(200,200,200,.6);
        }
        .call-username{
            color: black;
            font-weight: 900;
        }
    }

</style>