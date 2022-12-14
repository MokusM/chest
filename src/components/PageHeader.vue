<template>
	<div class="header">
		<div class="logo">
			<blinking><img src="@img/logo.png" alt="" /></blinking>
			<blinking><img src="@img/btn-play.png" alt="" /></blinking>
		</div>
	</div>
</template>
<script>
import Blinking from '../components/Blinking.vue';
export default {
	components: {
		Blinking,
	},
};
</script>
<style lang="scss" scoped>
.header {
	margin-bottom: 12px;
}
.logo {
	width: 308px;
	img {
		display: block;
		max-width: 100%;
	}
}
</style>
