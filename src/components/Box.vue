<template>
	<div class="box">
		<img :src="require(`@img/chest-${status}-${count}.png`)" alt="" />
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
		count: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		status() {
			return this.win ? 'win' : 'loss';
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
		bottom: 2px;
		width: 87%;
		height: 87%;
	}
}
</style>
