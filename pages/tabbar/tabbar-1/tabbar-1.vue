<template>
	<view class="content">
		页面 - 1
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {},
		methods: {},
		onTabItemTap(option) {
			if (this.$store.state.tabIndex != 0 || this.$store.state.tabIndex != '0') {
				// #ifdef APP-PLUS
				this.Tab.getInstance().show();
				// #endif
				this.$store.commit("setTabIndex", option.index);
			}
		}
	};
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
