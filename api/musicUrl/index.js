import http from '@/utils/request.js'

export function musicUrl(data){
	return http.get('/song/url',data)
}