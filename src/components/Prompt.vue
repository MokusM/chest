<template>
	<div class="prompt">{{ list[textIndex] }}</div>
</template>
<script>
export default {
	name: 'Prompt',
	props: {
		textIndex: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			list: ['Вскрывай сундуки из моей сокровищницы! Ищи несметные богатства!', 'Молодец! Для начала игры необходимо нажать кнопку “Играть”'],
		};
	},
};
</script>
<style lang="scss" scoped>
.prompt {
	width: 100%;
	height: 305px;
	background-image: url(@img/prompt.png);
	background-size: contain;
	background-repeat: no-repeat;
	color: #333333;
	font-size: 22px;
	font-weight: bold;
	font-style: normal;
	letter-spacing: normal;
	line-height: 22px;
	text-align: center;
	padding: 168px 30px 0 20px;
	margin-bottom: 56px;
}
</style>
