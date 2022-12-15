<template>
	<div class="box-list">
		<div class="box-list__item" v-for="(item, index) in game.chestLenght" :key="`item+${index}`">
			<div class="box" :class="{ disabled: game.availableGame === 0, blick: game.choiseGame }" @click="openChest(index)">
				<img :src="require(`@img/chest-${status}-${current === index ? count : 0}.png`)" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ChestList',
	props: {
		game: {
			type: Object,
			default: () => ({}),
		},
		current: {
			type: Number,
			default: 0,
		},
		count: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			timerId: null,
		};
	},
	methods: {
		openChest(index) {
			this.$emit('open', index);
		},
	},
	watch: {
		current() {
			//this.animChest();
		},
	},
	computed: {
		status() {
			return this.game.statusGame ? 'win' : 'loss';
		},
	},
};
</script>
<style scoped lang="scss">
.box-list {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -4px 2px 0;

	&__item {
		padding: 4px 4px 2px;
		width: 33.3%;
	}
}

.box {
	width: 163px;
	height: 168px;
	background-image: url(@img/box-bg.png);
	background-size: 100% 100%;
	position: relative;
	&.disabled {
		pointer-events: none;
	}
	&:not(.disabled) {
		cursor: pointer;
	}

	&:hover {
		transition: all 0.3s;
		filter: drop-shadow(0 0 0.75rem rgba(227, 227, 112, 1));
	}
	img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 6px;
		width: 83%;
	}
}
@keyframes moveLine {
	0% {
		top: -21%;
		left: -100%;
	}
	100% {
		top: 500%;
		left: 500%;
	}
}
.box-list__item:nth-child(odd) .box {
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: -21%;
		left: -100%;
		width: 200%;
		height: 20px;
		background: #e3e370;
		filter: blur(20px);
		transform: rotate(-45deg);
	}

	&.blick {
		&::before {
			animation: moveLine 5s linear 0.2 forwards;
		}
	}
}
</style>
