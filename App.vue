<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// #ifdef APP-PLUS
		this.Tab.getInstance().create();
		this.Tab.getInstance().show(false);
		this.Tab.getInstance().setOnClickListener(()=>{
			if(this.$store.state.tabIndex!=2 || this.$store.state.tabIndex!='2'){
				uni.switchTab({
					url:"/pages/tabbar/tabbar-3/tabbar-3"
				});
				this.Tab.getInstance().show(false);
				this.$store.commit("setTabIndex",2);
			}
		});
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */ 
</style>
