import http from '@/utils/request.js'

export function hotMusic(){
	return http.get('/playlist/hot')
}

export function hotMusicClass(){
	return http.get('/toplist')
}

export function hotMusicDetails(data){
	return http.get('/playlist/detail',data)
}