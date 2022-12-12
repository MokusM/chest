<template>
	<div id="app">
		<Game />
	</div>
</template>

<script>
import Game from './views/Game.vue';

export default {
	name: 'App',
	components: {
		Game,
	},
};
</script>

<style lang="scss">
.wrapper {
	max-width: 1220px;
	margin: 0 auto;
	padding: 0 30px;
}
</style>
