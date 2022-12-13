<template>
	<div class="box">
		<img :src="require(`@img/chest-${status}-${countImg}.png`)" alt="" />
	</div>
</template>

<script>
export default {
	name: 'Box',
	props: {
		win: {
			type: Boolean,
			default: false,
		},
		animation: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			countImg: 0,
		};
	},
	computed: {
		status() {
			return this.win ? 'win' : 'loss';
		},
	},
	watch: {
		animation() {
			this.countImg = 0;
			let timerId = setInterval(() => {
				this.countImg++;
				if (this.countImg >= 4) {
					clearInterval(timerId);
				}
			}, 150);
		},
	},
};
</script>
<style scoped lang="scss">
.box {
	width: 163px;
	height: 168px;
	background-image: url(../assets/img/box-bg.png);
	background-size: 100% 100%;
	position: relative;

	&:not(.disabled) {
		cursor: pointer;
	}
	img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 6px;
		width: 83%;
		height: 83%;
	}
}
</style>
