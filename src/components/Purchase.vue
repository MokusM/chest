<template>
	<div class="purchase">
		<div class="text-item">1 игра = 5 $</div>
		<div class="title">Вам доступно</div>
		<ul class="purchase-list">
			<li class="purchase-list__item">
				<div class="text-item">Игр:</div>
				<div class="purchase-list__cell">
					<div class="text-value">{{ availableGame }}</div>
				</div>
			</li>
			<li class="purchase-list__item purchase-list__item_title">
				<div class="title">Покупка:</div>
				<div></div>
			</li>
			<li class="purchase-list__item">
				<div class="text-item">Игр:</div>
				<div class="purchase-list__cell">
					<div class="purchase-list__row">
						<div class="text-value">{{ game }}</div>
						<div class="counter">
							<button class="counter__btn" @click="moreGame">
								<img src="@img/arrow.svg" alt="" />
							</button>
							<button class="counter__btn" :class="{ disabled: game === 0 }" @click="lessGame">
								<img src="@img/arrow.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</li>
			<li class="purchase-list__item">
				<div class="text-item">Сумма:</div>
				<div class="purchase-list__cell">
					<div class="purchase-list__row">
						<div class="text-value">{{ price }}</div>
						<span class="text-item">$</span>
					</div>
				</div>
			</li>
		</ul>
		<button @click="buyGame" :disabled="game === 0" class="btn">Купить</button>
	</div>
</template>
<script>
export default {
	name: 'Purchase',
	props: {
		availableGame: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			purchaseGame: this.availableGame,
			game: 0,
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
			this.purchaseGame += this.game;
			this.game = 0;
			this.$emit('update:availableGame', this.purchaseGame);
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
	height: 508px;
	background-image: url(@img/purchase-bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding: 111px 20px 10px;
	position: relative;
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
	text-shadow: -4px 6px 3px rgba(31, 32, 32, 0.4);
	margin-top: 27px;
}
.text-value {
	color: #fec602;
	font-size: 30px;
	line-height: 31px;
	font-weight: 400;
	text-shadow: -4px 6px 3px rgba(31, 32, 32, 0.4);
}

.purchase-list {
	display: table;
	width: 100%;
	margin-bottom: 12px;

	&__item {
		display: table-row;

		& > div {
			display: table-cell;
		}

		.title {
			padding-top: 46px;
		}
	}

	&__cell {
		width: 20%;
	}

	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.text-value {
			margin-right: 5px;
		}

		.text-item {
			font-size: 24px;
		}
	}
}

.counter {
	&__btn {
		padding: 2px;
		display: block;
		border: none;
		background-color: transparent;
		cursor: pointer;
		&:hover {
			fill: #fec602;
		}

		&.disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		&:last-child {
			img {
				transform: scale(1, -1);
			}
		}
	}
}
</style>
