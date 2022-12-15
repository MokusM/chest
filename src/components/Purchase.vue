<template>
	<div class="purchase">
		<div class="text-item">1 игра = 5 $</div>
		<div class="title">Вам доступно</div>
		<ul class="purchase-list">
			<li class="purchase-list__item">
				<div class="text-item">Игр:</div>
				<div class="purchase-list__cell">
					<div class="text-value">{{ game.availableGame }}</div>
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
						<div class="text-value">{{ counterGame }}</div>
						<div class="counter">
							<button class="counter__btn" @click="moreGame">
								<svg width="11px" height="6px" viewBox="0 0 11 6">
									<path fill-rule="evenodd" d="M10.022,5.684 L5.500,1.697 L0.977,5.684 L0.008,4.829 L5.500,-0.011 L10.991,4.829 L10.022,5.684 Z" />
								</svg>
							</button>
							<button class="counter__btn" :class="{ disabled: counterGame === 0 }" @click="lessGame">
								<svg width="11px" height="6px" viewBox="0 0 11 6">
									<path fill-rule="evenodd" d="M10.022,5.684 L5.500,1.697 L0.977,5.684 L0.008,4.829 L5.500,-0.011 L10.991,4.829 L10.022,5.684 Z" />
								</svg>
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
		<button @click="buyGame" :disabled="counterGame === 0" class="btn">Купить</button>
	</div>
</template>
<script>
export default {
	name: 'Purchase',
	props: {
		game: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			counterGame: 0,
		};
	},

	methods: {
		moreGame() {
			this.counterGame++;
		},
		lessGame() {
			this.counterGame--;
		},
		buyGame() {
			this.$emit('buy', this.counterGame);
			this.counterGame = 0;
		},
	},

	computed: {
		price() {
			return this.counterGame * 5;
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
	box-shadow: -2px 3px 7px 1px rgba(31, 32, 32, 0.4);
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
		height: 10px;
		fill: #fff;
		svg {
			display: block;
		}
		&:hover {
			fill: #fec602;
		}

		&.disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		&:last-child {
			svg {
				transform: scale(1, -1);
			}
		}
	}
}
</style>
