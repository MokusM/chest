<template>
	<canvas id="canvas" ref="fire"></canvas>
</template>
<script>
export default {
	data() {
		return {
			parts: [],
			partCount: 200,
			partsFull: false,
			hueRange: 50,
			globalTick: 0,
			vueCanvas: null,
		};
	},
	methods: {},
	mounted() {},
};
</script>

<style lang="scss" scoped>
canvas {
	position: absolute;
	left: -27px;
	top: -38px;
	z-index: 200;
}
</style>
