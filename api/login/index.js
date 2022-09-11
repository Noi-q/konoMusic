import http from '@/utils/request.js'

export function test(){
	// return http.get('/login/qr/key')
	return http.get('/register/anonimous')
}