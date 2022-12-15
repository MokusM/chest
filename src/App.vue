<template>
    <div id="app">
        <Game />
        <div v-if="load" class="preloader">
            <div class="preloader__content">
                <div class="preloader__img">
                    <img src="@img/preloader.gif" alt="">
                </div>
                <div class="preloader__text">Loading</div>
            </div>
        </div>
    </div>
</template>

<script>
import Game from './views/Game.vue';

export default {
    name: 'App',
    components: {
        Game,
    },
    data() {
        return {
            load: true
        }
    },
    mounted(){
        setTimeout(()=>{
            this.load = false
        },1000)
    }
};
</script>
<style lang="scss" scoped>
.preloader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 300;

    &__content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    &__img {
        width: 250px;
        height: 250px;
    }

    &__text {
        text-align: center;
        color: #fff;
        font-size: 50px;
        margin-top: 15px;
    }
}
</style>
