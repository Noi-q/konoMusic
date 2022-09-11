<template>
	<!-- 自定义导航栏 -->
	<view class="navBarBox">
		<!-- 状态栏占位 -->
		<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
		<!-- 导航栏内容 -->
		<!--
		<view class="navBar">
			<image class="logo" src="../../static/logo.png" mode="scaleToFill"></image>
			<text>我是标题</text>
		</view>
		-->
	</view>
</template>

<script>
	export default {
		name:"statusBar",
		data() {
			return {
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82+11
			};
		},
		//第一次加载时调用
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
	}
</script>

<style>
	.navBarBox{}
	.navBarBox .statusBar {}
	.navBarBox .navBar {
		padding: 3rpx 50rpx;
		padding-bottom: 8rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: red;
	}
	.navBarBox .navBar .logo {
		width: 82rpx;
		height: 82rpx;
		margin-right: 10rpx;
	}
</style>