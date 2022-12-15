<template>
	<div class="trol">
		<div class="trol__head">
			<img :src="require(`@img/head/${count + 1}.jpg`)" alt="" />
		</div>
		<blinking class="trol__handcuff" :name="`handcuff`" :deg="75" :radial="40" :maxDelay="4000" :minDelay="3500" />
		<blinking class="trol__shoulder" :name="`shoulder`" :deg="25" :radial="40" :maxDelay="4000" :minDelay="1500" />
		<blinking class="trol__ax" :name="`ax`" :deg="0" :radial="40" :maxDelay="1000" :minDelay="500" />
		<img src="@img/trol.png" alt="" />
	</div>
</template>
<script>
import Blinking from '../components/Blinking';
export default {
	data() {
		return {
			count: 0,
		};
	},
	components: {
		Blinking,
	},
	methods: {
		imgCounter() {
			setInterval(() => {
				this.count++;
				if (this.count >= 14) {
					this.count = 0;
				}
			}, 260);
		},
	},
	mounted() {
		this.imgCounter();
	},
};
</script>
<style lang="scss" scoped>
.trol {
	position: absolute;
	left: calc(50% - 100px);
	top: 122px;

	img {
		display: block;
	}

	&__head {
		position: absolute;
		right: 255px;
		top: 33px;
	}

	&__handcuff {
		position: absolute;
		right: 295px;
		top: 118px;
	}

	&__shoulder {
		position: absolute;
		right: 162px;
		top: 100px;
	}

	&__ax {
		position: absolute;
		right: 248px;
		top: 195px;
	}
}
</style>
