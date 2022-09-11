import http from '@/utils/request.js'

// 歌单列表
export function boutiqueMusicList(){
	return http.get("/playlist/highquality/tags")
}
// 歌单歌曲列表
export function boutiqueMusic(data){
	return http.get("/playlist/track/all",data)
}