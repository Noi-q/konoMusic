<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 监听中间按钮
			uni.onTabBarMidButtonTap(()=>{
				console.log(123)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
</style>