<template>
	<div class="main">
		<div class="wrapper">
			<PageHeader />
			<div class="row">
				<div class="col">
					<div class="box-list">
						<div class="box-list__item" v-for="item in 9" :key="item.id">
							<Box />
						</div>
					</div>
					<div class="inf">Для игры Вам необходимо купить попытки, а затем нажать кнопку "ИГРАТЬ"</div>
				</div>
				<Purchase />
			</div>
		</div>
	</div>
</template>
<script>
import PageHeader from '../components/PageHeader';
import Box from '../components/Box';
import Purchase from '../components/Purchase';

export default {
	name: 'Game',
	components: {
		PageHeader,
		Box,
		Purchase,
	},
	data() {
		return {
			game: 0,
		};
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
}

.inf {
	text-align: center;
	color: #fff;
	font-family: 'PT';
}

.box-list {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -4px 0 0;

	&__item {
		width: 33.3%;
		padding: 4px 4px 2px;
	}
}
.row {
	display: flex;
	justify-content: space-between;
}
.col {
	max-width: 520px;
}
</style>
