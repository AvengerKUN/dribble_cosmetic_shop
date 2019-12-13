<template>
    <div class="piece-list">
        <piece class="piece" v-for="item in pieces" :piece="item" :key="item.id"></piece>
    </div>
</template>

<script>
    import Piece from "./Piece";
    import {mapState} from "vuex";
    export default {
        name: "PieceList",
        components: {Piece},
        computed:{
            ...mapState(["pieces"])
        }
    }
</script>

<style scoped>
    .piece-list{
        display: flex;
        flex-wrap: wrap;
    }
</style>