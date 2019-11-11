<template>
	<view class="content">
		页面 - 3
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			let xx=this.$store.state.tabIndex;
			console.log("默认的值:",xx);
		},
		methods: {

		},
		onTabItemTap(option) {
			if(this.$store.state.tabIndex!=2 || this.$store.state.tabIndex!='2'){
				// #ifdef APP-PLUS
				this.Tab.getInstance().show(false);
				// #endif
				this.$store.commit("setTabIndex",option.index);
			}	
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
