<template>
	<div class="box">
		<div class="chest">
			<div class="chest__top"></div>
			<div class="chest__bottom"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Box',
	props: {
		msg: String,
	},
};
</script>
<style scoped lang="scss">
.box {
	width: 163px;
	height: 168px;
	background-image: url(../assets/img/box-bg.png);
	background-size: cover;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding-bottom: 11px;
}
.chest {
	width: 125px;
	height: 113px;
	background-image: url(../assets/img/chest-bottom.png);
	background-size: contain;
	background-position: center bottom;
	background-repeat: no-repeat;
	position: relative;

	&__bottom {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 125px;
		height: 113px;
		background-image: url(../assets/img/chest-bottom.png);
		background-size: contain;
		background-position: center bottom;
		background-repeat: no-repeat;
		position: relative;
	}

	&__top {
		position: absolute;
		bottom: 62px;
		left: 0;
		width: 100%;
		height: 52px;
		background-image: url(../assets/img/chest-top.png);
		background-size: contain;
		background-position: center top;
		background-repeat: no-repeat;
		transform-origin: 0 100%;
		transform: rotateX(10deg);
	}
}
</style>
