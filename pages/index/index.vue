<template>
	<view class="box">
		<!-- 状态栏 -->
		<statusBar/>
		<!-- 标题栏 -->
		<view class="header">
			<view class="logoBox">
				<text>konoMusic</text>
				<!-- <image src="../../static/logo.png" mode="scaleToFill"></image> -->
			</view>
			<view class="wireBox">
				<view class="wire-l"></view>
				<view class="wire-m-box">
					<view class="wire-m-s"></view>
					<view class="wire-m-m"></view>
				</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="swiperBox">
			<u-swiper
				:list="bannerList"
				height="180"
				previousMargin="30"
				nextMargin="30"
				:circular="true"
				:autoplay="true"
				radius="5"
				bgColor="#ffffff"
			></u-swiper> 
		</view>
		<!-- 精选的宝藏歌曲 -->
		<view class="mainBox">
			<view class="mainTitle"> 
				<image src="../../static/icon/refresh.png" mode=""></image>
				<text>精选的宝藏歌曲</text>
			</view>
			<view class="mainList">
				<view class="mainItem" v-for="(item,index) in songList" :key="item.id" @click="playerAudio(item)">
					<view class="itemImg">
						<img :src="item.al.picUrl" alt="">
					</view>
					<view class="itemName">
						<view class="song">
							<text>{{item.name}}</text>
						</view>
						<view class="account">
							<text>-{{item.ar[0].name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 排行榜 -->
		<view class="rankingBox">
			<view class="rankingTitle">
				<!-- <image src="../../static/icon/refresh.png" mode=""></image> -->
				<text>排行榜</text>
			</view>
			<view class="rankingClass">
				<view class="uni-margin-wrap rankingList">
					<swiper class="swiperBox" :circular="false" :interval="3000"
						:duration="500" next-margin="100rpx">
						<swiper-item class="itemBox">
							<view class="rankingItem">
								<view class="itemTitle">
									<text>{{leaderboard[0].name}}</text>
									<image src="../../static/icon/right.png" mode=""></image>
								</view>
								<view class="list" v-for="(result,index) in leaderboardListA" :key="result.id" @click="leaderboardAudio(result)">
									<view class="itemList">
										<view class="listImg">
											<img :src="result.al.picUrl" alt="">
										</view>
										<view class="listIndex">
											<text>{{index+1}}</text>
										</view>
										<view class="listName">
											<view class="song">
												<text>{{result.name}}</text>
											</view>
											<view class="account">
												<text>{{result.ar[0].name}}</text>
											</view>
										</view>
									</view>
								</view>
							</view> 
						</swiper-item>
						
						<swiper-item class="itemBox">
							<view class="rankingItem">
								<view class="itemTitle">
									<text>{{leaderboard[1].name}}</text>
									<image src="../../static/icon/right.png" mode=""></image>
								</view>
								<view class="list" v-for="(result,index) in leaderboardListB" :key="result.id" @click="leaderboardAudio(result)">
									<view class="itemList">
										<view class="listImg">
											<img :src="result.al.picUrl" alt="">
										</view>
										<view class="listIndex">
											<text>{{index+1}}</text>
										</view>
										<view class="listName">
											<view class="song">
												<text>{{result.name}}</text>
											</view>
											<view class="account">
												<text>{{result.ar[0].name}}</text>
											</view>
										</view>
									</view>
								</view>
							</view> 
						</swiper-item>
						
						<swiper-item class="itemBox">
							<view class="rankingItem">
								<view class="itemTitle">
									<text>{{leaderboard[3].name}}</text>
									<image src="../../static/icon/right.png" mode=""></image>
								</view>
								<view class="list" v-for="(result,index) in leaderboardListC" :key="result.id" @click="leaderboardAudio(result)">
									<view class="itemList">
										<view class="listImg">
											<img :src="result.al.picUrl" alt="">
										</view>
										<view class="listIndex">
											<text>{{index+1}}</text>
										</view>
										<view class="listName">
											<view class="song">
												<text>{{result.name}}</text>
											</view>
											<view class="account">
												<text>{{result.ar[0].name}}</text>
											</view>
										</view>
									</view>
								</view>
							</view> 
						</swiper-item>
						
						<swiper-item class="itemBox">
							<view class="rankingItem">
								<view class="itemTitle">
									<text>{{leaderboard[4].name}}</text>
									<image src="../../static/icon/right.png" mode=""></image>
								</view>
								<view class="list" v-for="(result,index) in leaderboardListD" :key="result.id" @click="leaderboardAudio(result)">
									<view class="itemList">
										<view class="listImg">
											<img :src="result.al.picUrl" alt="">
										</view>
										<view class="listIndex">
											<text>{{index+1}}</text>
										</view>
										<view class="listName">
											<view class="song">
												<text>{{result.name}}</text>
											</view>
											<view class="account">
												<text>{{result.ar[0].name}}</text>
											</view>
										</view>
									</view>
								</view>
							</view> 
						</swiper-item>
						<swiper-item class="itemBox">
							<view class="rankingItem">
								<view class="itemTitle">
									<text>{{leaderboard[2].name}}</text>
									<image src="../../static/icon/right.png" mode=""></image>
								</view>
								<view class="list" v-for="(result,index) in leaderboardListE" :key="result.id" @click="leaderboardAudio(result)">
									<view class="itemList">
										<view class="listImg">
											<img :src="result.al.picUrl" alt="">
										</view>
										<view class="listIndex">
											<text>{{index+1}}</text>
										</view>
										<view class="listName">
											<view class="song">
												<text>{{result.name}}</text>
											</view>
											<view class="account">
												<text>{{result.ar[0].name}}</text>
											</view>
										</view>
									</view>
								</view>
							</view> 
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		<view class="" v-if="music !== null ? true : false">
			<audio :src="`https://music.163.com/song/media/outer/url?id=${music.id}.mp3`" controls></audio>
		</view>
	</view>
</template>

<script>
	import statusBar from '../../components/statusBar/statusBar.vue'
	import {test} from '../../api/login/index.js'
	import {hotMusicClass,hotMusicDetails} from '../../api/hotMusic/index.js'
	import {boutiqueMusicList,boutiqueMusic} from '../../api/boutique/index.js'
	import {musicUrl} from '../../api/musicUrl/index.js'
	export default {
		components:{statusBar},
		data() {
			return {
				title: 'Hello',
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png'
				],
				// 精选歌曲列表
				songList: [],
				// 排行榜单
				leaderboard:[],
				// 排行榜单歌曲
				leaderboardListA:null,
				leaderboardListB:null,
				leaderboardListC:null,
				leaderboardListD:null,
				leaderboardListE:null,
				// 当前播放音乐
				music:null
			}
		},
		onLoad() {
			test().then(
				res =>{
					console.log(res.data.cookie)
					localStorage.setItem("cookie", res.data.cookie)
				}
			)
			boutiqueMusicList().then(
				res =>{
					boutiqueMusic({
						id:res.data.tags[0].id,
						limit:3
					}).then(
						resA =>{
							this.songList = resA.data.songs
						}
					)
				}
			)
			hotMusicClass().then(
				res =>{
					this.leaderboard = res.data.list
					let result = res.data.list.slice(0,5)
					hotMusicDetails({
						id:result[0].id
					}).then(
						resA =>{
							this.leaderboardListA = resA.data.playlist.tracks.slice(0,3)
						}
					) 
					hotMusicDetails({
						id:result[1].id
					}).then(
						resA =>{
							this.leaderboardListB = resA.data.playlist.tracks.slice(0,3)
						}
					)
					hotMusicDetails({
						id:result[2].id
					}).then(
						resA =>{
							this.leaderboardListC = resA.data.playlist.tracks.slice(0,3)
						}
					)
					hotMusicDetails({
						id:result[3].id
					}).then(
						resA =>{
							this.leaderboardListD = resA.data.playlist.tracks.slice(0,3)
						}
					)
					hotMusicDetails({
						id:result[4].id
					}).then(
						resA =>{
							this.leaderboardListE = resA.data.playlist.tracks.slice(0,3)
						}
					)
				}
			)
		},
		methods: {
			playerAudio(item){
				musicUrl({
					id:item.id
				}).then(
					res =>{
						this.music = res.data.data[0]
					}
				)
			},
			leaderboardAudio(item){
				console.log(item)
				musicUrl({
					id:item.id
				}).then(
					res =>{
						this.music = res.data.data[0]
					}
				)
			}
			
		}
	}
</script>

<style lang="less" scoped>
	.box{
		width: 100%;
		height: 100%;
		background-color: #eee;
	}
	.header{
		display: flex;
		flex-direction: row;
		background-color: white;
		.logoBox{
			background-color: white;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 100rpx;
			text{
				font-size: 50rpx;
				font-weight: bold;
			}
		}
		.wireBox{
			margin-left: 30%;
			align-self: center;
			display: flex;
			flex-direction: column;
			.wire-l{
				width: 40px;
				height: 2px;
				border-radius: 3px;
				border: solid 1px black;
			}
			.wire-m-box{
				margin-top: 2px;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				.wire-m-s{
					width: 10px;
					height: 2px;
					border-radius: 3px;
					border: solid 1px black;
					margin-right: 5rpx;
				}
				.wire-m-m{
					width: 20px;
					height: 2px;
					border-radius: 3px;
					border: solid 1px black;
				}
			}
		}
	}
	.swiperBox{
		background-color: white;
		padding-bottom: 20rpx;
	}
	.mainBox{
		background-color: white;
		margin-top: 10rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		.mainTitle{
			margin-left: 5%;
			display: flex;
			flex-direction: row;
			text{
				margin-left: 20rpx;
				font-weight: bold;
			}
			image{
				width: 50rpx;
				height: 50rpx;
			}
		}
		.mainList{
			display: flex;
			flex-direction: column;
			align-items: center;
			.mainItem {
				position: relative;
				z-index: 1;
				overflow: hidden;
			}
			.mainItem:hover {
				color: black;
				border-radius: 10px;
			}
			.mainItem:hover::before {
				transform: scale(1, 1);
				background-color: #eee;
			}
			.mainItem::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				transform: scale(0, 1);
				transition: all .6s;
				z-index: -1;
			}

			.mainItem{
				margin-top: 20rpx;
				display: flex;
				flex-direction: row;
				width: 90%;
				.itemImg{
					align-self: center;
					img{
						border-radius: 10px;
						width: 120rpx;
						height: 120rpx;
					}
				}
				.itemName{
					height: 120rpx;
					align-self: center;
					display: flex;
					flex-direction: row;
					padding-left: 20rpx;
					width: 80%;
					border-bottom: solid 1px #eee;
					.song{
						align-self: center;
						width: 70%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					.account{
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						align-self: center;
						text{
							font-size: 25rpx;
							color: gray;
						}
					}
				}
			}
		}
	}
	.rankingBox{
		margin-top: 10rpx;
		padding-top: 30rpx;
		background-color: white;
		.rankingTitle{
			margin-left: 5%;
			display: flex;
			flex-direction: row;
			text{
				margin-left: 20rpx;
				font-weight: bold;
			}
			image{
				width: 50rpx;
				height: 50rpx;
			}
		}
		.rankingClass{
			.uni-margin-wrap {
				width: 690rpx;
				width: 100%;
			}
			.swiperBox{
				height: 550rpx;
			}
			.rankingList{
				.rankingItem{
					margin-top: 30rpx;
					margin-left: 30rpx;
					border-radius: 6px;
					box-shadow: 0 0 5px #eee;
					padding-left: 40rpx;
					padding-bottom: 40rpx;
					padding-top: 40rpx;
					margin-right: 5px;
					.itemTitle{
						display: flex;
						flex-direction: row;
						image{
							align-self: center;
							width: 40rpx;
							height: 40rpx;
						}
						text{
							font-weight: 600;
							align-self: center;
						}
					}
					.list {
						position: relative;
						z-index: 1;
						overflow: hidden;
					}
					.list:hover {
						color: black;
						border-radius: 10px;
					}
					.list:hover::before {
						transform: scale(1, 1);
						background-color: #eee;
					}
					.list::before {
						content: '';
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						transform: scale(0, 1);
						transition: all .6s;
						z-index: -1;
					}
					.list{
						display: flex;
						flex-direction: column;
						.itemList{
							margin-top: 20rpx;
							display: flex;
							flex-direction: row;
							.listImg{
								align-self: center;
								img{
									width: 100rpx;
									height: 100rpx;
									border-radius: 6px;
								}
							}
							.listIndex{
								margin-left: 20rpx;
								align-self: center;
								text{
									font-weight: bold;
								}
							}
							.listName{
								margin-left: 20rpx;
								align-self: center;
								display: flex;
								flex-direction: column;
								width: 70%;
								.song{
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}
								.account{
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
									text{
										font-size: 25rpx;
										color: gray;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
