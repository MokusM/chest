<template>
	<div class="main">
		<div class="trol">
			<img src="@img/trol.png" alt="" />
		</div>
		<div class="main__right"></div>
		<div class="wrapper">
			<page-header />
			<div class="content">
				<div class="content__chest">
					<div class="box-list">
						<div class="box-list__item" :class="{ disabled: isAllow }" v-for="(item, index) in chestLenght" :key="`item+${index}`" @click="openChest(index)">
							<box :win="isWin" :count="countImg" />
						</div>
					</div>
					<div class="inf">Для игры Вам необходимо купить попытки, а затем нажать кнопку "ИГРАТЬ"</div>
				</div>
				<div class="content__trol">
					<prompt :text-index="promptText" />
					<button :disabled="isAllow" @click="openChest" class="btn">ИГРАТЬ</button>
				</div>
				<div class="content__purchase">
					<purchase :availableGame.sync="game" />
				</div>
			</div>
		</div>
		<transition name="fade">
			<popup v-if="showModal" @close="closeModal" :win="isWin" />
		</transition>
	</div>
</template>
<script>
import PageHeader from '../components/PageHeader';
import Box from '../components/Box';
import Purchase from '../components/Purchase';
import Prompt from '../components/Prompt';
import Popup from '../components/Popup';

export default {
	name: 'Game',
	components: {
		PageHeader,
		Box,
		Purchase,
		Prompt,
		Popup,
	},
	data() {
		return {
			game: 0,
			showModal: false,
			isLoading: false,
			chestLenght: 9,
			countImg: 0,
		};
	},
	methods: {
		openChest(index = null) {
			if (index) Math.floor(Math.random() * this.chestLenght) + 1;

			this.game--;
			this.isLoading = true;

			setTimeout(() => {
				this.showModal = true;
				setTimeout(() => {
					this.isLoading = false;
					this.showModal = false;
				}, 3000);
			}, 1100);

			this.countImg = 0;
			let timerId = setInterval(() => {
				this.countImg++;
				if (this.countImg >= 4) {
					clearInterval(timerId);
				}
			}, 150);
		},

		closeModal() {
			this.showModal = false;
		},
	},
	computed: {
		isAllow() {
			return this.game === 0 || this.isLoading;
		},
		isWin() {
			return this.game % 2 === 0;
		},
		promptText() {
			if (this.game > 0) {
				return 1;
			} else {
				return 0;
			}
		},
	},
};
</script>

<style lang="scss">
.main {
	background-color: #000;
	background-image: url(@img/main-bg.jpg);
	background-size: cover;
	min-height: 100vh;
	padding-top: 6.3%;

	&__right {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 714px;
		background-image: url(@img/main-right.png);
		background-size: cover;
		background-position: center left;
		background-repeat: no-repeat;
	}

	.wrapper {
		position: relative;
		z-index: 2;
	}
}

.inf {
	text-shadow: 0 0 10px #1f2020;
	color: #ffffff;
	font-family: 'PT Sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	letter-spacing: normal;
	line-height: 20px;
	text-align: center;
	max-width: 307px;
	margin: 0 auto;
}

.box-list {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -4px 2px 0;

	&__item {
		width: 33.3%;
		padding: 4px 4px 2px;

		&.disabled {
			pointer-events: none;
		}
	}
}

.trol {
	position: absolute;
	right: 510px;
	top: 122px;

	img {
		display: block;
	}
}
.content {
	display: flex;
	padding-right: 10px;

	&__chest {
		flex: 1;
	}

	&__trol {
		width: 340px;
		padding-top: 48px;

		.btn {
			margin: 0 auto;
			position: relative;
			left: -9px;
		}
	}

	&__purchase {
		width: 273px;
		margin-left: 22px;
		padding-top: 8px;
	}
}
</style>
