<template>
	<div class="main">
		<fire />
		<trol />
		<div class="main__right"></div>
		<div class="wrapper">
			<page-header />
			<div class="content">
				<div class="content__chest">
					<chest-list :game="gameInf" @open="openChest" />
					<div class="inf">Для игры Вам необходимо купить попытки, а затем нажать кнопку "ИГРАТЬ"</div>
				</div>
				<div class="content__trol">
					<prompt :text-index="promptText" />
					<button :disabled="isAllow" @click="openChest()" class="btn">ИГРАТЬ</button>
				</div>
				<div class="content__purchase">
					<purchase :game="gameInf" @buy="buyGame" />
				</div>
			</div>
		</div>
		<transition name="fade">
			<popup v-if="showModal" @close="closeModal" :win="gameInf.statusGame" />
		</transition>
	</div>
</template>
<script>
import PageHeader from '../components/PageHeader';
import Purchase from '../components/Purchase';
import Prompt from '../components/Prompt';
import Popup from '../components/Popup';
import Fire from '../components/Fire';
import Trol from '../components/Trol';
import ChestList from '../components/ChestList';

export default {
	name: 'Game',
	components: {
		PageHeader,
		Purchase,
		Prompt,
		Popup,
		Fire,
		Trol,
		ChestList,
	},
	data() {
		return {
			showModal: false,
			isLoading: false,

			gameInf: {
				chestLenght: 9,
				currentChest: -1,
				availableGame: 0,
				choiseGame: false,
				statusGame: false,
			},
		};
	},
	methods: {
		openChest(index) {
			if (index || index === 0) {
				this.gameInf.currentChest = index;
			} else {
				this.gameInf.currentChest = Math.floor(Math.random() * this.gameInf.chestLenght) + 1;
			}
			this.gameInf.statusGame = this.gameInf.availableGame % 2 === 0;
			this.gameInf.availableGame--;
			this.isLoading = true;

			setTimeout(() => {
				this.showModal = true;
				setTimeout(() => {
					this.closeModal();
				}, 3000);
			}, 1100);
		},

		closeModal() {
			this.showModal = false;
			this.isLoading = false;
			this.gameInf.currentChest = -1;
		},

		buyGame(count) {
			this.gameInf.availableGame += count;

			this.gameInf.choiseGame = true;
			setTimeout(() => {
				this.gameInf.choiseGame = false;
			}, 4000);
		},
	},
	computed: {
		isAllow() {
			return this.gameInf.availableGame === 0 || this.isLoading;
		},
		promptText() {
			if (this.gameInf.availableGame > 0) {
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
		left: calc(50% + 250px);
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
