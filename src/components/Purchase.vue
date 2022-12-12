<template>
	<div class="purchase">
		<img src="../assets/img/purchase-title.png" alt="" />
		<div class="text-item">1 игра = 5 $</div>
		<div class="title">Вам доступно</div>
		<ul class="purchase-list">
			<li class="purchase-list__item">
				<div class="text-item">1 игра = 5 $</div>
				<div class="text-value">{{ availableGame }}</div>
			</li>
		</ul>
		<div class="title">Покупка:</div>
		<ul class="purchase-list">
			<li class="purchase-list__item">
				<div class="text-item">Игр:</div>
				<div class="text-value">{{ game }}</div>
				<div class="slider">
					<div class="slider__item slider__item_up" @click="moreGame">
						<img src="@img/arrow.svg" alt="" />
					</div>
					<div class="slider__item slider__item_bottom" :class="{ disabled: game === 0 }" @click="lessGame">
						<img src="@img/arrow.svg" alt="" />
					</div>
				</div>
			</li>
			<li class="purchase-list__item">
				<div class="text-item">Сумма:</div>
				<div class="text-value">{{ price }}<span class="text-item">$</span></div>
			</li>
		</ul>
		<button @click="buyGame">Купить</button>
	</div>
</template>
<script>
export default {
	name: 'Purchase',
	data() {
		return {
			game: 0,
			availableGame: 0,
		};
	},

	methods: {
		moreGame() {
			this.game++;
		},
		lessGame() {
			this.game--;
		},
		buyGame() {
			this.availableGame += this.game;
			this.game = 0;
			this.$emit('available', this.availableGame);
		},
	},

	computed: {
		price() {
			return this.game * 5;
		},
	},
};
</script>
<style lang="scss" scoped>
.purchase {
	width: 282px;
	background-image: url(@img/purchase-bg.png);
	background-repeat: no-repeat;
	background-size: contain;
	padding: 20px;
}
.text-item {
	color: #bab6b6;
	font-size: 15px;
	line-height: 31px;
	font-weight: 400;
}
.title {
	color: #ffffff;
	font-size: 18px;
	line-height: 31px;
	font-weight: 400;
	text-transform: uppercase;
}
.text-value {
	color: #fec602;
	font-size: 30px;
	line-height: 31px;
	font-weight: 400;
}

.purchase-list {
	&__item {
		display: flex;
		justify-content: space-between;
	}
}

.slider {
	&__item {
		padding: 2px;

		&.disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		&_bottom {
			padding: 2px;
			img {
				transform: scale(1, -1);
			}
		}
	}
}
</style>
