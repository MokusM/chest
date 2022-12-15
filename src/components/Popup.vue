<template>
    <div class="popup" @click="close">
        <div class="modal" @click.stop>
            <div v-if="win" class="modal__text">Поздравляем! Вы выиграли!!!</div>
            <div v-else class="modal__text error">Не повезло! Попробуйте еще раз</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Popup",
    props: {
        showModal: {
            type: Number,
            default: 0,
        },
        win: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>
<style lang="scss" scoped>
.popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.78);
    z-index: 100;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: fit-content;
    height: fit-content;
    max-width: 635px;
    padding: 8rem 3rem;
    border: 10px solid #737372;
    border-radius: 20px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
    background-image: url(@img/popup-bg.jpg);
    background-size: 100% 100%;
    z-index: 999;
    transform: none;

    &__text {
        font-size: 45px;
        line-height: 50px;
        color: green;

        &.error {
            color: red;
        }
    }
}
</style>
